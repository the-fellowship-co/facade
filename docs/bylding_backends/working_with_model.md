---
id: working_with_models
title: Working with models
sidebar_label: Working with models
---
Model is place to implement your business logic. Methods defined in models
 can be exposed to other blocks and frontends . Model by default has
 `get`, `create`, `update`, `delete` and `list` interface methods. You can
 also add additional methods and control what needs to be exposed using `inf` markup.

### Interface Markup
You could add additional interface methods using `inf(RequestType) {ReturnType}`
 over it. Supported request and return types are: `ID`, String,
 Integer, Float, Bool, `Byld::Messages` and `Byld::Model`.

Model's interface methods are wrapped in a `[Model]Service` object which can be
used from other blocks and gates to invoke them.

Also, `Byld::Model` is an extension of [ActiveRecord](https://guides.rubyonrails.org/active_record_basics.html), so all of its methods
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

### Migration
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
Read [ActiveRecord Migration](https://guides.rubyonrails.org/active_record_migrations.html) to learn more about writing database migrations.
