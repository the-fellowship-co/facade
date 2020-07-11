---
id: working_with_blocks
title: Working with blocks
sidebar_label: Working with blocks
---

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
