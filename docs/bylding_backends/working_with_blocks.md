---
id: working_with_blocks
title: Working with blocks
sidebar_label: Working with blocks
---

Byld project is a collection of your blocks and a gate. Identify your business units and abstract all its logic inside blocks. Organizing as different blocks make it easy to build and manage, increases productivity and economical to scale based on different needs. Blocks are exposed to the frontend via single GraphQL based gate (gateway). Gates can be used to control what should be exposed to the frontend and power different frontends.

In case of simplified amazon, project would have the following blocks:

```sh
amazon/
├── identity/
└── orders/
└── payments/
└── communication/
└── inventory/
└── shipping/
└── gate/
```

Use `byld new [project-name]` to create a new project. Your project name should be unique across our customers. Running this will create your project in Byld and a new local directory `[project-name]/`. Switch into the newly created directory for further development.

## Creating Blocks

Block are used to abstract all the business capabilities. Compared to
traditional backends, block eliminates all the boilerplate code for transport,
routing and persistence. In blocks, you need only models to organize your
business logic.

Use `byld block new [block-name]` to create a new block.

### Structure of a block

```sh
identity/
├── Gemfile
└── models/
    └── user.rb
    └── contact_info.rb
```
