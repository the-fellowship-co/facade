---
id: todo_app
title: Let's build a backend for todoist
sidebar_label: Let's build a backend for todoist
---

This tutorial will help you build and deploy a backend for todoist. For this you
will create a project with two blocks and one gate to expose them.

#### Blocks
1. Identity
2. Todos

### Create todoist project

```sh
$ byld new todoist
```

Now there is a new directory created with the name `todoist/`. Switch
into the newly created directory.

## Create identity block

```sh
$ byld block new identity
```

Switch into the newly created `identity/` directory.

### Create user model

```sh
$ byld block g:model user
```

It creates two files the actual model and the db changes needed for the new
model.

Let's add `publisher on: :user_events` to `User` model to publish
`:user_created`, `:user_updated` and `:user_destroyed` events to other blocks.
Later, you will use `:user_destroyed` event to delete all the todo items when
the user is destroyed.

```ruby
class User < Byld::Model
  expose only: [:get, :create, :update, :delete, :list]
  publisher on: :user_events
end
```

Let's add first_name  and last_name fiels for User in the migration file.

```ruby
class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name

    end
  end
end
```

### Deploy identity block

Now, let us deploy the identity block and check its status.

```sh
$ byld deploy
🤞 Deploying order...
👌 Deployment triggered!

$ byld status

[yourname]-todo

blocks

+----------+----------+
| name     | status   |
+----------+----------+
| identity | running  |
+----------+----------+

```

### Test and debug your block

`byld console` and `byld logs` commands come in handy to test and debug the
block after deploying.

## Create todos block

```sh
$ byld block new todos
```

Switch into the newly created `todos/` directory.

### Create todo item model

```sh
$ byld block g:model todo_item
```

It creates two files the actual model and the db changes needed for the new
model.

```ruby
class TodoItem < Byld::Model
  expose only: [:get, :create, :update, :delete, :list]
end
```

Let's add title, description and status fields for TodoItem in the migration
file.

```ruby
class CreateTodoItems < ActiveRecord::Migration[5.2]
  def change
    create_table :todo_items do |t|
      t.string :title
      t.string :description
      t.boolean :status
      t.assingee_id :integer
    end
  end
end
```

Now, let's subscribe to `:user_destroyed` event to delete all the todo items
when the user is deleted.

```ruby
class TodoItem < Byld::Model
  expose only: [:get, :create, :update, :delete, :list]

  subscriber
  def self.handle_user_events(event)
    case event.type
    when :user_destroyed
      user = UserService.client.get(event.source_id)
      TodoItem.where(user_id: user.assignee_id).delete_all
  end
end
```

### Deploy todos block

Now, let us deploy the todos block and check its status.

```sh
$ byld deploy
🤞 Deploying order...
👌 Deployment triggered!

$ byld status

todoist

blocks

+----------+----------+
| name     | status   |
+----------+----------+
| identity | running  |
| todos    | running  |
+----------+----------+

```

### Test and debug your block

`byld console` and `byld logs` commands come in handy to test and debug the
block after deploying.

## Expose identity and todos block

From the `todoist/` directory, run to create a gate for your project.

```sh
$ byld gate new
```

Now there is a new directory created with the name `gate/`. Switch into the
newly created directory.

Now, expose identity and todos block using,

```sh
$ byld gate expose identity
```

```sh
$ byld gate expose todos
```
### Deploy gate

Use `byld deploy` to deploy the gate. This exposes all the blocks to the
frontends via GraphQL endpoints.

When the block changes, you need to expose the block and deploy the gate again.

```sh
$ byld deploy
```

### Querying the gate

Use `byld status` to see the status of the gate and blocks.

```sh
$ byld status

+----------------------------------------+---------------------------------------+
| status  | url                          | docs                                  |
+----------------------------------------+---------------------------------------+
| running | todoist.letsbyld.com         | todoist.letsbyld.com/graphiql         |
+---------+------------------------------+---------------------------------------+

blocks

+-------------+------------+
| name        | status     |
+-------------+------------+
| identity    | running    |
| todos       | running    |
+-------------+------------+
```
You can use `todoist.letsbyld.com` url to power your UI across
different platforms.

Use the `todoist.letsbyld.com/graphiql` url to to view docs and
test out your endpoints.

