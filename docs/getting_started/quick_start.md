---
id: quick_start
title: Quick start
sidebar_label: Quick Start
---

## Setup

### Installation

```sh
$ gem install byld-cli
```
If you don’t have ruby on your machine. We recommend to using RVM…

### Login

Use `byld login`.

[Request your token](https://forms.gle/2VGp3jgdndogwM939)

```sh
$ byld login

Your email: xxx@xxx.com
Your token: xxxxx
```
You’re all set to start building your first project.

## Architecting with blocks

### Create your first project

Let's try to create a barebones versions of amazon.com's backend with byld. Use `byld new [project-name]` to create a new project. 

```sh
$ byld new amazon
```

Now there is a new directory created with the name `amazon/`. Switch into the newly created directory.

### Create your first block

Block are fundamental units of abstractions of your business/organizations. Lets start with identity block which abstracts users, roles and groups. 

Use `byld block new [block-name]` to create a new block.

```sh
$ byld b new identity
```

### Structure of a block

```sh
identity/
├── Gemfile
└── models/
```

### Create your first model

Use the `byld b g:model [model-name]` to create a model.

```sh
$ byld b g:model users
```

It creates two files the actual model and the db migration for the model.

```
class User < ActiveRecord::Base
  expose only: [:get, :create, :update, :delete, :list]
end
```

The model by default has `get`, `create`, `update`, `delete` and `list`
implemented. You could add additional methods using this interface markup
`inf(RequestType) {ReturnType}` over it.

```ruby
class User < ActiveRecord::Base
  expose only: [:get, :create, :update, :delete, :list]

  inf(ID) {User}
  def self.activate(id)
    user = User.find(id)
    user.active = true
    user.save!
    user
  end
end
```
Use the migration file to fill the necessary fields for the model.

```ruby
class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
    end
  end
end
```

That’s pretty much it. You’re all set up to deploy your first block. Use `byld deploy` from the block directory to deploy it.

Similarily other blocks could be created this way.

## Communicating between blocks

### Synchronous Communication
Blocks could access the marked up interface methods from the another block in a synchronous manner. In below case `Stock` model in `inventory` block exposes a bunch of methods.

```ruby

class Stock < ActiveRecord::Base
  expose only: [:get, :update]

  inf(ID) {Bool}
  def self.available?(product_id)
    stock = Stock.find(product_id: id)
    stock.qty > 0
  end

end
```

Use `byld connect [block-name]` to enable sync communication between blocks.

```sh
$ byld connect inventory
```

After this you should be able to call all the exposed methods (`:get`, `:update`, `:available?`) from `Stock` in another block using the `[Model]Service.client`.

```ruby
StockService.client.available?(productId)
```

### Asynchronous Communication

Mark any model as publisher using the `publisher on: [channel_name]` markup.
By default model’s creation, update and deletion events are published when the
model is marked. Use `publish(:event_name, model)`  to publish custom events
on the channel.

#### Publisher

Use `publish(:event_name)` to send a message to multiples blocks using our
pub/sub system.

```ruby
class Order < ActiveRecord::Base
  publisher on: order_events

  def place!
    ...
    publish(:order_placed)
  end
end
```
#### Subscriber

Use the `subscriber` markup and name the method this way `handle_[channel_name]`
to subscribe events from a particular channel. Event object passed to the
subscriber method contains `type` and `source_id` of the model publishing it.

```ruby
class Stock < ActiveRecord::Base
  ...

  subscriber
  def self.handle_order_events(event)
    case event.type
    when :order_placed
      order = OrderService.client.get(event.source_id)
      order.lineitem.each |item|
         stock = Stock.find(product_id: item.product_id)
         stock.quantity -= item.quantity
         stock.save
      end
    ...
  end
end
```

## Expose it to frontends

Finally, all blocks could be made available to the frontend via gate.

### Create your gate

Use `byld gate new` to create a gate for the project.

```sh
$ byld gate new
```
Now there is a new directory created with the name `gate`. Switch into to the newly created directory.

### Expose your blocks

Use `byld gate expose [block-name]` to generate an edge to the frontend.

```sh
$ byld gate expose order
```
### Structure of a gate

```sh
gate/
├── Gemfile
└── edges
    └── identity_edge.rb
    └── inventory_edge.rb
    └── order_edge.rb
    └── payment_edge.rb
    └── communication_edge.rb
```
You could add additional methods using this interface markup `inf(RequestType) {ReturnType}` over it.

```ruby
class OrderEdge < Byld::Edge
  include Orders

  inf(ID) {Order}
  def get_order(id)
    OrderService.client.get(id)
  end

  inf(CreateOrderReq) {Order}
  def create_order!(req)
    OrderService.client.create!(req)
  end

  inf(UpdateOrderReq) {Order}
  def update_order!(req)
    OrderService.client.update!(req)
  end

  inf(ID) {Order}
  def delete_order!(id)
    OrderService.client.delete!(id)
  end
end
```

### Joining blocks

```ruby
class OrderEdge < Byld::Edge

  join User
  def customer(order)
    UserService.client.get(order.user_id)
  end

end
```

### Deploy your gate

Use `byld deploy` to deploy the gate. This exposes all the blocks to the frontends via GraphQL endpoints.

```sh
$ byld deploy
```
### Querying the gate

Use `byld status` to see the status of the gate and blocks.

```sh
$ byld status
```
Use the `/graphiql` endpoint to interact with the endpoints in browser.

You can use the`/graphql` endpoint to power your UI across different platforms.

```graphql
query {
  getOrder(id: "z3dsbjn3223") {
    id
    totalPrice
    lineItems {
      id
      qty
      unitPrice
      totalPrice
      product {
        id
        title
      }
      customer {
        firstName
        lastName
        address {
          street
          city
          state
        }
      }
    }
  }
}
```
