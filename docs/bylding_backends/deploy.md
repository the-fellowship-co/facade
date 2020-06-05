---
id: deploy
title: Deploying blocks and gates
sidebar_label: Deploying blocks and gates
---

Truss is built based on Domain Driven Design(DDD) to organize backends.
In DDD, you organize codes based on business domains. For example, Identity,
Catalog, Order, Payment, Communication are common domains of an e-commerce
business. Each domain exposes mutliple methods to other domains and gateway.
Gateway acts like a proxy layer between UI and domains.

### Domain
+ Domain abstracts all business logic related to a business domain.
+ Domain can have multiple services inside it. Each service exposes a specific
set of methods to other domains.
+ Inter domain communications are abstracted as simple function calls.
+ Whenever you create a model, persisted in db, we automatically expose CRUD
methods as a service. Ex: User model will be exposed as UserService with
get_user, list_user, create_user!, delete_user!, update_user! methods by
default.
+ You can also create a custom service to expose domain level methods.

### Gateway
+ Gateway acts like a proxy layer for expose all domains to UI.
+ Gateway exposes all the domains via GraphQL interface.
+ Gateway supports joins to automatically fetch data across domains.
For example, get_order can automatically fetch payment details when order and
payment domains are joined based on order_id.
+ Gateway can be used implement complex inter domain orchestration logic.
+ Gateway can be used for request throttling, authentication/ authorization.

### Messages

+ Non persistent models are known as messages
+ Messages can be used to abstract non persistent data inside the domain.
Ex: request/ response classes.
