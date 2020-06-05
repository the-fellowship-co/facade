---
id: block
title: Block API
sidebar_label: Block API
---
## Login
Run this from project directory
```ruby
truss login
```
## Create project
```ruby
truss new your-project-namecd
```
## Create domain
Run this from project directory
```ruby
truss domain new your-domain-name
```
## Connect domain
Run this from domain in which you need to generate the client,
```ruby
truss g:client domain-name
```
## Create gateway
Run this from project directory
```ruby
truss gateway create
```
## Expose domain
Run this from gateway directory,
```ruby
truss expose domain-name
```
## Create model
Run this from domain directory in which you need to generate the model,
```ruby
truss g:model model_name
```
## Deploy
Run this from domain/ gateway directory,
```ruby
truss deploy
```
## Logs
Run this from domain/ gateway directory,
```ruby
truss logs
```
## Console
Run this from domain/ gateway directory,
```ruby
truss console
```
