---
id: cli
title: CLI Command
sidebar_label: CLI
---
## Setup
### Login
```
$ byld login
```
### Create project
```sh
$ byld new [project-name]
```
## Blocks
### Create block
Run this from project directory,
```sh
$ byld block new [block-name]
```
or you can also use a short version

```sh
$ byld b new [block-name]
```
### Create model
Run this from block directory in which you need to generate the model,
```sh
$ byld b g:model [model-name]
```
### Connect block
Run this from block in which you need to generate the client,
```sh
$ byld connect [block-name]
```

## Gate
### Create gate
Run this from project directory
```sh
$ byld gate create
```
### Expose block
Run this from gate directory,
```sh
$ byld expose [block-name]
```
### Connect block
Run this from gate directory,
```sh
$ byld connect [block-name]
```

## Deployment
### Deploy
Run this from block/ gate directory,
```sh
$ byld deploy
```
### Status
Run this from block/ gate directory,
```sh
$ byld status
```
### Logs
Run this from block/ gate directory,
```sh
$ byld logs
```
### Console
Run this from block/ gate directory,
```sh
$ byld console
```
