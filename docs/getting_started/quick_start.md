---
id: quick_start
title: Quick start
sidebar_label: Quick Start
---

**Setup**

**Installation**


    $ gem install byld-cli

If you don’t have ruby on your machine. We recommend to using RVM…

**Login**

Use `byld login`. Get your token here.


    $ byld login

    Your email: xxx@xxx.com
    Your token: xxxxx

You’re all set to start building your first project.

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
