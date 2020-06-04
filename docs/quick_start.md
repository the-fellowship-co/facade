---
id: quick_start
title: Quickstart
sidebar_label: Quick Start
---

## Installation

Install byld command line to start building backend for your business.

```ruby
gem install byld-cli
```

Woohoo!! That's all the setup you need to build your backend.

## Let's byld your first backend.

First, we need to login.

```ruby
byld login
```

Now we are all set to build our simple Doordash backend. For this we will create
- a project named doordash
- identity, restaurants, inventory, order domains.
- one gateway to expose all the domains to the UI.

### Doordash Project
```ruby
byld new doordash
cd doordash
export $PROJECT_DIR=`pwd`
```
### Identity Block
```ruby
cd $PROJECT_DIR
byld block new identity
cd identity/
byld block g:model user
```

```ruby
truss deploy
```

### Restaurant Block
```ruby
cd $PROJECT_DIR
byld domain create restaurants
cd restaurant
byld block g:model restaurant
byld block g:model menu_item
```

```ruby
truss deploy
```
### Inventory Block
```ruby
cd $PROJECT_DIR
byld block new inventory
cd inventory
byld block g:model menu_item
```

```ruby
byld deploy
```
### Order Block
```ruby
cd $PROJECT_DIR
byld block new orders
cd orders
byld block g:model order
```

```ruby
truss deploy
```
### Gateway
```ruby
cd $PROJECT_DIR
byld gate new
cd gateway
byld connect inventory
byld expose identity
byld expose restaurants
byld expose inventory
byld expose orders
```

```ruby
byld deploy
```
