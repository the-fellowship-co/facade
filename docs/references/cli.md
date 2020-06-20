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
Run this from project directory
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
### Deploy block
Run this from block directory,
```sh
$ byld deploy
```
### Connect block
Run this from block in which you need to generate the client,
```sh
$ byld connect [block-name]
```
### Logs
Run this from block directory,
```sh
$ byld logs
```
### Console
Run this from block directory,
```sh
$ byld console
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
### Deploy gate
Run this from gate directory,
```sh
$ byld deploy
```
### Connect block
Run this from gate directory,
```sh
$ byld connect [block-name]
```
### Logs
Run this from gate directory,
```sh
$ byld logs
```
### Console
Run this from gate directory,
```sh
$ byld console
```
