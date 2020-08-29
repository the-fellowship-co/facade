---
id: custom
title: Messages and Services
sidebar_label: Messages and Services
---

## Create Messages

Use `Byld::Message` to create a custom messages. Custom messages can be used as
request/reponse type in your additional methods.

Custom types will be exported across blocks with `byld connect [block-name]`.

```ruby
class CalculateTaxReq < Byld::Message
  field :country, String
  field :state, String
  field :price, Float
end

class CalculateTaxResp < Byld::Message
  field :price_with_tax, Float
  field :tax, Float
end
```


## Create Services

Inside a block, use `Byld::Service` to create a custom service. All models
and custom messages can be used in custom services. It needs to placed in the same directory as `models/`.

Custom services will be exported across blocks with
`byld connect [block-name]`. You can also expose custom services to frontends
in gates with `byld gate expose [block-name]`.

```ruby
class TaxCalculator < Byld::Service

  inf(CalculateTaxReq) {CalculateTaxResp}
  def calculate(req)
    # 10% tax
    tax = 0.1 * req.price
    resp = CalculateTaxResp.new(price_with_tax: req.price + tax, tax: tax)
  end

end
```
