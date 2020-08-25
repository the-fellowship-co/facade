---
id: intro
title: What's Byld?
sidebar_label: What's Byld?
---

Byld is a tool to design, develop and deploy backends in an incredibly fast way.

### How it works?

1. **Architect with blocks** to abstract different domains of your business.
2. **Communicate between blocks** either synchronously or asynchronously with just a function call.
3. **Expose blocks to frontends** using gate, a GraphQL gateway.
4. **Deploy blocks and gates** instantly using a single cli command.

Byld isn't just a framework, though – we eliminate a lot of boilerplate code that tradinational backends require like transport, routing, messaging and infrastructure setup. It simplifies building backends by making you only write code that matters and let's you instantly deploy your backends without any additional setups.

## Setting it up

### Installation

```sh
$ gem install byld-cli
```

You need to have a Ruby with v2.6 or higher. We recommend using [RVM](https://rvm.io/rvm/install) for installing it.


### Login

Use `byld login` to authenicate.

```sh
$ byld login

Your email: someone@example.com
Your token: xxxxx
```
You’re all set for building your first project.

