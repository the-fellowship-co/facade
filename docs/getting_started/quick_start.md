---
id: quick_start
title: Quick start
sidebar_label: Quick Start
---

## Installation

Install byld cli to start building backend.

```sh
gem install byld-cli
```

Woohoo!! That's all the setup you need to build your backend.

## Let's byld your first backend.

First, we need to login.

```sh
byld login
```

Now we are all set to build our simple Doordash backend. For this we will create
- a project named doordash
- identity, restaurants, inventory, order domains.
- one gateway to expose all the domains to the UI.

### Doordash Project

```sh
byld new doordash
cd doordash
export $PROJECT_DIR=`pwd`
```

### Identity Block

```sh
cd $PROJECT_DIR
byld block new identity
cd identity/
byld block g:model user
```

```sh
byld deploy
```

### Restaurant Block

```sh
cd $PROJECT_DIR
byld domain create restaurants
cd restaurant
byld block g:model restaurant
byld block g:model menu_item
```

```sh
byld deploy
```

### Inventory Block

```sh
cd $PROJECT_DIR
byld block new inventory
cd inventory
byld block g:model menu_item
```

```sh
byld deploy
```

### Order Block

```sh
cd $PROJECT_DIR
byld block new orders
cd orders
byld block g:model order
```

```sh
byld deploy
```

### Gate

```sh
cd $PROJECT_DIR
byld gate new
cd gate
byld connect inventory
byld expose identity
byld expose restaurants
byld expose inventory
byld expose orders
```

```sh
byld deploy
```
