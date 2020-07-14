---
id: working_with_models
title: Working with models
sidebar_label: Working with models
---
Model is the place to implement all your business logic. Methods defined in models can be exposed to other blocks and frontends . Model by default has
 `get`, `create`, `update`, `delete` and `list` interface methods. You can
 also add additional methods and control what needs to be exposed using `inf` markup.

### Interface Markup
You could add additional interface methods using `inf(RequestType) {ReturnType}`
 over it. Supported request and return types are: `ID`, `String`,
 `Integer`, `Float`, `Bool`, `Byld::Messages` and `Byld::Model`.

Model's interface methods can be accessed like   `[Model].client.[method_name]` from other blocks and gates.

Also, `Byld::Model` is an extension of [ActiveRecord](https://guides.rubyonrails.org/active_record_basics.html), so all of its methods are available to use on it. You can learn more about CRUD methods and querying an Active Record model in the [CRUD methods guide](https://guides.rubyonrails.org/active_record_basics.html#crud-reading-and-writing-data) and [Query Interface guide](https://guides.rubyonrails.org/active_record_querying.html).

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
You can learn more about writing database migrations in [ActiveRecord migration guide](https://guides.rubyonrails.org/active_record_migrations.html).

### In built methods

The block docs contains the details of all in built methods, their request and response types. The block docs will be generated automatically once you deploy.
After deploying, you use `byld status` to get the link to access your docs. Documentation will have all the interface method signature and defintions of the request and response types.

Model's interface methods can be accessed via the client [Model].client.[method_name] from other blocks and gates.

```sh
$ byld status

+-------------------------------+------------------------------+--------------------------+
| status  | url                 | gate docs                    | blocks docs              |
+-------------------------------+------------------------------+--------------------------+
| running | amazon.letsbyld.com | amazon.letsbyld.com/graphiql | amazon.letsbyld.com/docs |
+---------+---------------------+------------------------------+--------------------------+

blocks

+----------+------------+
| name     | status     |
+----------+------------+
| order    | running    |
| identity | running    |
+----------+------------+
```


### Validations

Use ActiveRecord valiations to write all your validations logic. Before saving an Active Record object, it runs your validations. If these validations produce any errors, it does not save the object.

You can also run these validations on your own. valid? triggers your validations and returns true if no errors were found in the object, and false otherwise.

You can learn more about writing validation in [ActiveRecord validation guide](https://guides.rubyonrails.org/active_record_validations.html).

```ruby
class User < Byld::Model
  validates :first_name, presence: true
end

User.create(first_name: "John Doe").valid? # => true
User.create(first_name: nil).valid? # => false
```
