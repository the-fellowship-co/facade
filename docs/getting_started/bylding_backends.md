---
id: bylding_backends
title: Bylding Backends
sidebar_label: Bylding Backends
---

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

```ruby
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
    user.enable!
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

That’s pretty much it. You’re all set up to deploy your first block.

### Deploy your block

Use `byld deploy` from the block directory to deploy it. Use `byld console` and `byld logs` commands to test and debug the block after deploying.

Similarily other blocks could be created this way.


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
