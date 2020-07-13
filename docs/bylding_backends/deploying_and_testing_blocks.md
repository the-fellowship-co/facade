---
id: deploying_and_testing_blocks
title: Deploying and testing blocks
sidebar_label: Deploying and testing blocks
---
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