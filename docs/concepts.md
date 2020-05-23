---
id: concepts
title: Truss Concepts
sidebar_label: Concepts
---

Truss is a developer platform for building backends to power businesses. It
enables developers to quickly build backend services without compromising on
the right architecture, best practices and scalability.

:::note

We currently supports only **Ruby** based backend development with
**sqlite** database. Truss is in a pre-release stage and our products
might change to improve our user experience and quality.

Our platform is ideal to build and deploy internal applications.

:::


### Truss Framework
Abstracts away the complexity involved in backend engineering, makes it easy
to build backends with right architecture and best practices. All you need to
do is focus on the business logic and we will take care of the rest.

#### CRUD interfaces
We expose create, get, list, update, delete methods by default based on your
models.

#### Pub/Sub
We provide support to publish and subscribe to events across services. We also
publish default CRUD events on model objects to subscribe and process.

#### Client generation
We auto generate client with introspection. Inter service communication is
simply a function call. <code>CommunicationService.client.send(message)</code>

#### Config
We provide configs for different environments like dev, prod. Configs can be
accessed anywhere in your code. Ex: Settings.db_connection

### Ready made kits
Use our **identity**, **payment** and **communication** kits, built using
our framework, to assemble your backend rather than coding everything from
scratch. These kits are ready to use with right set of customizable options.
You can also add features after forking them.

### No setup infrastructure
Instantly deploy, read and write databases, publish and subscribe to queues
and auto scale to loads without any setups. We internally use kubernetes to
deploy your backends. You can also view logs, access ruby console and run
database migrations from command line.

