---
id: todo_app
title: Backend for a todo app
sidebar_label: Backend for a todo app
---

This tutorial will help you build and deploy a backend for a todo app. For this you
will create a project with three blocks and a gate to expose them.

#### Blocks
1. Identity
2. Todos
3. Communications

## Login

Use `byld login` to authenicate. If you don't have a token yet it. [Request your token](https://forms.gle/2VGp3jgdndogwM939).

```sh
$ byld login

Your email: someone@example.com
Your token: xxxxx
```
You’re all set for building your first project.

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

It creates two files, the actual model and the db changes needed for the new
model.

```ruby
class User < Byld::Model
  enable only: [:get, :create]
end
```

Let's add first_name  and last_name fields for User in the migration file.

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

It creates two files, the actual model and the db changes needed for the new
model. Let's add `publisher on: :todo_item_events` to the model. This will publish `:todo_item_created`, `:todo_item_updated` and `:todo_item_destroyed` events to other blocks. Later, you will use `:todo_item_created` event to send emails to the assigned user.


```ruby
class TodoItem < Byld::Model
  enable only: [:get, :create, :update, :delete]
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

## Create communications block

```sh
$ byld block new comms
```

Switch into the newly created `comms/` directory.

### Create communication model

```sh
$ byld block g:model communication
```

It creates two files, the actual model and the db changes needed for the new
model.

```ruby
class Communication < Byld::Model
  enable only: [:get, :create]
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
assigned user. For this,  we need to connect comms with todos block
 to fetch todos for sending emails. Use `byld connect [block]` to do that.

```sh
$ byld connect todos
```

Now, let's implement the handler to process `:todo_item_created` event.
```ruby
class Communication < Byld::Model
  include Todos
  enable only: [:get, :create]

  subscriber
  def self.handle_todo_item_events(event)
    case event.type
    when :todo_item_created
      log.info 'Sending email...'

      todo_item = TodoItem.client.get(event.source_id)
      communication = Communication.create!(type: 'EMAIL', to_id: todo_item.assignee_id, from_id: 'no-reply@todoist.com', body: 'New todo assigned to you')
      communication.send!
  end

  def send!
   # insert code to send emails
  end
end
```

### Deploy communications block

Now, let us deploy the comms block and check its status.

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
| comms         | running  |
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
| comms         | running    |
+---------------+------------+
```

Use the `todoist.letsbyld.com/graphiql` url to view docs and test out your endpoints. You can use `todoist.letsbyld.com` url to power your UI across different platforms.


