---
id: intro
title: What's Byld?
sidebar_label: What's Byld?
---

Byld is a tool to design, develop and deploy backends in an incredibly fast way.

### How it works?

1. **Architect with blocks** to abstract individual business units like order, payment, shipping etc..
2. **Communicate between blocks** using a simple function call or publishing/subscribing to events via in built pub/sub system.
3. **Expose blocks to frontends** using gate, a GraphQL gateway.
4. **Deploy blocks and gates** instantly using a single cli.

Byld isn't just a framework, though – we eliminate a lot of boilerplate code that application backends tend to require like transport, routing, pub/sub and infrastructure setup. Byld simplifies building backends by making you only write code that matters and let's you instantly deploy your backends without any additional setups.

## Setting it up

### Installation

```sh
$ gem install byld-cli
```
You need  to install `ruby 2.6.6` or newer  version. We recommend using [RVM](https://rvm.io/rvm/install) for installing it.

### Login

Use `byld login` to authenicate. If you don't have a token yet it. [Request your token](https://forms.gle/2VGp3jgdndogwM939).

```sh
$ byld login

Your email: someone@example.com
Your token: xxxxx
```
You’re all set for building your first project.

