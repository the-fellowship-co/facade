---
id: architect_with_blocks
title: Architect with blocks
sidebar_label: Architect with blocks
---

## Project

Project is a collection of your blocks and a gate. Use `byld new [project-name]` to create a new project.

In case of simplified amazon, project would have the following blocks:

```sh
amazon/
├── identity/
└── orders/
└── payments/
└── communication/
└── inventory/
└── catalog/
└── shipping/
└── gate/
```

## Blocks

Block is an individual unit of abstraction in your business. Compared to
traditional backends, block eliminates all the boilerplate code for transport,
routing and persistence. In blocks, you need only models to organize your
business logic.

Use `byld block new [block-name]` to create a new block.

### Structure of a block

```sh
identity/
├── Gemfile
└── models/
    └── user.rb
    └── contact_info.rb
```
### Models
Model is place to implement your business logic. Methods defined in models
 can be exposed to other blocks and frontends . Model by default has
 `get`, `create`, `update`, `delete` and `list` interface methods. You can
 also add additional methods and control what needs to be exposed using `inf` markup.



#### Interface Markup
You could add additional interface methods using `inf(RequestType) {ReturnType}`
 over it. Supported request and return types are: `ID`, String,
 Integer, Float, Bool, `Byld::Messages` and `Byld::Model`.

Model's interface methods are wrapped in a `[Model]Service` object which can be
used from other blocks and gates to invoke them.

Also, `Byld::Model` is an extension of active record, so all of its methods
are available to use on it.

```ruby
class User < Byld::Model
  expose only: [:get, :create, :update, :delete, :list]

  inf(ID) {User}
  def self.activate(id)
    user = User.find(id)
    user.active = true
    user.save!
  end
end
```

Use the `byld block g:model [model-name]` to generate a model. It creates two
files the actual model and the db migration needed for the new model.

#### Migration
Migration files are used create the schema for the models. You can define the
necessary fields for the model and add further migrations to add/ remove
fields, create primary keys, indexes etc..

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

## Deploying a block

Blocks eliminates all the infrasturcture related code needed to deploy your
block and database. Your migration scripts will be run automatically before
deployment.

Use `byld deploy` from the block directory to deploy it. And check the status
of the deployment using `byld status` command.


## Testing a block

After deploying, you can test/ debug your blocks from your local command line.

### Using interactive console

Use `byld console` to connect to your block's console. All the models are
loaded for testing.

```ruby
req = CreateUserReq.new(first_name: 'foo', last_name: 'bar')
user = UserService.client.create(req)
UserService.client.activate(user.id)
```

### Viewing logs

Use `byld logs` to view your block's logs in your command line.
