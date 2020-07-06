---
id: custom
title: Custom components
sidebar_label: Custom types, services and edges
---

## Create custom types

Use `Byld::Message` to create a custom type. Custom types can be used as
request / reponse type in your additional methods.

Custom types will be exported across blocks with `byld connect [block-name]`.
```ruby
class ReportReq < Byld::Message

end
```

```ruby
class ReportResp < Byld::Message

end
```


## Create custom services

Use `Byld::Service` to create a custom service. All models and custom types
can be used in custom services.

Custom services will be exported across blocks with
`byld connect [block-name]`. You can also expose custom services to frontends
in gates with `byld gate expose [block-name]`.
```ruby
class ReportService < Byld::Service

end
```


## Create custom edges

Use `Byld::Edge` to create a custom edge. You can use all services and types
in the custom edges with `byld connect [block-name]`.
```ruby
class ReportEdge < Byld::Edge

end
```
