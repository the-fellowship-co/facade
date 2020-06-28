---
id: architecting_with_blocks
title: Architecting with blocks
sidebar_label: Architecting with blocks
---

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
