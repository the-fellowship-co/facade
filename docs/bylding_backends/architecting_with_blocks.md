---
id: architecting_with_blocks
title: Architecting with blocks
sidebar_label: Architecting with blocks
---

### Create your first project

Use `byld new [project-name]` to create a new project. 

```sh
$ byld new amazon
```

Now there is a new directory created with the name `amazon/`. Switch into the newly created directory.

### Create your first block

Use `byld block new [block-name]` to create a new block. Lets start with an identity block which abstracts users and identity management for your business/organisation.

```sh
$ byld block new identity
```

Switch into the newly created `identity/` directory.

#### Structure of a block

```sh
identity/
├── Gemfile
└── models/
```

### Create your first model

Use the `byld block g:model [model-name]` to create a model. 

```sh
$ byld block g:model user
```

It creates two files the actual model and the db changes needed for the new model.

```ruby
class User < Byld::Model
  expose only: [:get, :create, :update, :delete, :list]
end
```

The model by default has `get`, `create`, `update`, `delete` and `list`
are implemented. You could add additional methods using this interface markup
`inf(RequestType) {ReturnType}` over it. 

Supported request and return types are: `ID`, `~~String~~`, `~~Integer~~`, `~~Float~~`, `~~Bool~~`, `Byld Messages` and `Byld Models`.

Also `Byld::Model` is an extension of active record, so all of active record methods are available to use on it. 

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

Use `byld deploy` from the block directory to deploy it. And check the status of the deployment using `byld status` command. 

```sh
$ byld status

amazon

blocks

+----------+----------+
| name     | status   |
+----------+----------+
| identity | active   |
+----------+----------+

```

### Test and debug your block

`byld console` and `byld logs` commands come in handy to test and debug the block after deploying. 
