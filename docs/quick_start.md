---
id: quick_start
title: Quickstart
sidebar_label: Quick Start
---

## Installation

Install truss command line to start building backend for your business.

```ruby
rvm install 2.6.6
rvm use 2.6.6
gem install truss
```

Woohoo!! That's all the setup you need to build your backend.

## Let's build Doordash backend.

First, we need to login to truss platform.

```ruby
truss login
```

Now we are all set to build our simple Doordash backend. For this we will create
- a project named doordash
- identity, restaurants, inventory, order domains.
- one gateway to expose all the domains to the UI.

### Doordash Project
```ruby
truss new doordash
cd doordash
export $PROJECT_DIR=`pwd`
```
### Identity Domain
```ruby
cd $PROJECT_DIR
truss domain create identity
cd identity
truss g:model user
```

```ruby
truss deploy
```

### Restaurant Domain
```ruby
cd $PROJECT_DIR
truss domain create restaurants
cd restaurant
truss g:model restaurant
truss g:model menu_item
```

```ruby
truss deploy
```
### Inventory Domain
```ruby
cd $PROJECT_DIR
truss domain create inventory
cd inventory
truss g:model menu_item
```

```ruby
truss deploy
```
### Order Domain
```ruby
cd $PROJECT_DIR
truss domain create orders
cd orders
truss g:model order
```

```ruby
truss deploy
```
### Gateway
```ruby
cd $PROJECT_DIR
truss gateway create
cd gateway
truss connect inventory
truss expose identity
truss expose restaurants
truss expose inventory
truss expose orders
```

```ruby
truss deploy
```
