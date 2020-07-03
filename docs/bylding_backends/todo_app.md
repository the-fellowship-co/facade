---
id: todo_app
title: Let's build a backend for todoist
sidebar_label: Let's build a backend for todoist
---

This tutorial will help you build and deploy a backend for todoist. For this you
will create a project with three blocks and one gate to expose them.

#### Blocks
1. Identity
2. Todos
3. Notifications

## Create todoist project

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

```ruby
class User < Byld::Model
  expose only: [:get, :create, :update, :delete, :list]
end
```

Let's add first_name  and last_name fiels for User in the migration file.

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

### Deploy identity block

Now, let us deploy the identity block and check its status.

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
model. Let's add `publisher on: :todo_item_events` to the model to publish `:todo_item_created`, `:todo_item_updated` and `:todo_item_destroyed` events to other blocks. Later, you will use `:todo_item_created` event to send emails to the assigned user.


```ruby
class TodoItem < Byld::Model
  expose only: [:get, :create, :update, :delete, :list]
  publisher on: :todo_item_events
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
      t.integer :assignee_id
      t.datetime :completed_at
      t.timestamps
    end
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

## Create notifications block

```sh
$ byld block new notifications
```

Switch into the newly created `notifications/` directory.

### Create communication model

```sh
$ byld block g:model communication
```

It creates two files the actual model and the db changes needed for the new
model.

```ruby
class Communication < Byld::Model
  expose only: [:get, :create]
end
```

Let's add fields to communications in the migration file.

```ruby
class CreateCommunications < ActiveRecord::Migration[5.2]
  def change
    create_table :communications do |t|
      t.integer :type
      t.integer :from_id
      t.integer :to_id
      t.string :body
      t.string :status
      t.timestamps
    end
  end
end
```

Now, let's subscribe to `:todo_item_created` event to send emails to the
assigned user. For this,  we need to connect notifications with todos block
 to the fetch todos for sending emails, use `byld connect [block]` to do that.

```sh
$ byld connect todos
```

Now, let's implement the handler to process `:todo_item_created` event.
```ruby
class Communication < Byld::Model
  include Todos
  expose only: [:get, :create, :update, :delete, :list]

  subscriber
  def self.handle_todo_item_events(event)
    case event.type
    when :todo_item_created
      todo_item = TodoItemService.client.get(event.source_id)
      log.info 'Sending email'

      communication = Communication.create!(type: 'EMAIL', to_id: todo_item.assignee_id, from_id: 'no-reply@todoist.com', body: 'New todo assigned to you')
      communication.send!
  end

  def send!
   # insert code to send emails
  end
end
```

### Deploy notifications block

Now, let us deploy the notifications block and check its status.

```sh
$ byld deploy
🤞 Deploying order...
👌 Deployment triggered!

$ byld status

todoist

blocks

+---------------+----------+
| name          | status   |
+---------------+----------+
| identity      | running  |
| todos         | running  |
| notifications | running  |
+---------------+----------+

```

### Test and debug your block

`byld console` and `byld logs` commands come in handy to test and debug the
block after deploying.

## Expose identity and todos blocks

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

+---------------+------------+
| name          | status     |
+---------------+------------+
| identity      | running    |
| todos         | running    |
| notifications | running    |
+---------------+------------+
```

Use the `todoist.letsbyld.com/graphiql` url to to view docs and test out your endpoints. You can use `todoist.letsbyld.com` url to power your UI across different platforms.


