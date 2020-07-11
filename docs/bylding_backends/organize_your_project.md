---
id: organize_your_project
title: Organize your project
sidebar_label: Organize your project
---

Project is a collection of your blocks and a gate. Identify your business units and abstract all its logic inside blocks. Organizing as different blocks make it easy to build and manage, increases productivity and economical to scale based on different needs. Blocks are exposed to the frontend via single GraphQL based gate (gateway). Gates can be used to control what should be exposed to the frontend and power different frontends.

In case of simplified amazon, project would have the following blocks:

```sh
amazon/
├── identity/
└── orders/
└── payments/
└── communication/
└── inventory/
└── catalog/
└── shipping/
└── gate/
```

Use `byld new` to create a new project. Your project name
should be unique across our customers.

```sh
$ byld new [project-name]
```

Running this registers your project with byld and creates a new local directory `[project-name]/`. Switch into the newly created directory for further development.
