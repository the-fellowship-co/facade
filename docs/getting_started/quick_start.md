---
id: quick_start
title: Quick Start
sidebar_label: Quick Start
---

Get a quick walkthrough of Byld and how it works.

### Setup

Use `byld login` to login. If you don't have a token yet, sign up.

```sh
$ byld login

Your email: someone@example.com
Your token: xxxxx
```

You’re all set for building your first project.

### Creating projects

Use `byld new [project-name]` to create a project.

```sh
$ byld new amazon
```

Now there is a new directory created with the name `amazon/`. Switch into the newly created directory.

### Creating blocks

Use `byld block new [block-name]` to create a block.

```sh
$ byld block new identity
```

Switch into the newly created `identity/` directory.

#### Creating models

```sh
$ byld block g:model user
```

It creates two files, the actual model and the database changes/migrations needed for the new model. 

In the model, markup the methods the needs to be accessed from other blocks or gate using `inf(RequestType) {ResponseType}`. 

By default the `:get`, `:create`, `:update`, `:delete` and `:list` methods of the model are exposed.

```ruby
class User < Byld::Model
  enable only: [:get, :create]

  inf(ID) {Bool}
  def self.activate!(id)
    user = User.find(id)
    user.active = true
    user.save!
  end

end
```

Let's add first_name, last_name, :email fields for User model in the migration file.

```ruby
class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.bool :active
    end
  end
end
```

#### Deploying blocks

Use `byld deploy` command from the block directory to deploy the block.

```sh
$ byld deploy
🤞 Deploying order...
👌 Deployment triggered!
```

```sh
$ byld status

amazon

blocks

+----------+----------+
| name     | status   |
+----------+----------+
| identity | running  |
+----------+----------+
```

### Testing and debugging your blocks

`byld console` and `byld logs` commands come in handy to test and debug the block after deploying.

### Communicating between blocks

#### Sync communication

Use `byld connect [block-name]` to establish communication across blocks. After this you should be able access the marked up from the connected block this way `User.client.active?('abcd1234')`.


#### Async communication

Use the publisher markup to emit events from a model. By default create, update and delete events are published.

```
class Order < Byld::Model
  publisher on: :order_events

  def place!
    ...
    publish(:order_placed)
  end
end
```

Use the subscriber markup the method to subscribe events from the publisher model. 

```ruby
class Stock < Byld::Model
  ...

  subscriber
  def self.handle_order_events(event)
    case event.type
    when :order_placed
      order = Order.client.get(event.source_id)
      order.lineitems.each |item|
         stock = Stock.find(product_id: item.product_id)
         stock.quantity -= item.quantity
         stock.save
      end
    ...
  end
end
```

### Exposing blocks

From the project directory, use `byld gate new` to create the gate to expose your blocks.

```sh
$ byld gate new
```

Switch into the newly created directory called `gate/`.

Now, use the `byld expose [block-name]` to auto create the edge to expose your block.

```sh
$ byld gate expose identity
```


#### Deploying the gate

Use `byld deploy` to deploy the gate. This exposes all the blocks to the frontends via GraphQL endpoints.

```sh
$ byld deploy
```

#### Querying the gate

Use `byld status` to see the status of the gate and blocks.

```sh
$ byld status

blocks

+---------------+------------+
| name          | status     |
+---------------+------------+
| identity      | running    |
| order         | running    |
| comms         | running    |
+---------------+------------+
```

Use the `amazon.letsbyld.com/graphiql` url to view docs and test out your endpoints. 

And use the `amazon.letsbyld.com` url to power your UI across different platforms.

