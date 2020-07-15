---
id: working_with_edges
title: Working with edges
sidebar_label: Working with edges
---
## Gate

Gate is a single GraphQL based API gateway for different frontends like web, mobile and desktop. GraphQL eliminates the need for having a separate gateway for each frontend. GraphQL let's you customize your response by returning only the data you ask. Gate is a collection of edges.

You can learn more about GraphQL in [GraphQL guide](https://graphql.org/)

### Structure of a gate

```sh
gate/
├── Gemfile
└── edges
    └── user_edge.rb
    └── stock_edge.rb
    └── order_edge.rb
    └── payment_edge.rb
    └── shipping_edge.rb
```

## Edge

Edge is a layer between your frontends and blocks. Edge can be used to create powerful APIs aggregating multiple interface methods from different blocks. For example, to power the order summary UI we need to aggregate `get_order` from order block, `get_payment` from payment block and `shipping_status` from shipping block based on `order_id`. Our `join` markup  simplifies aggregations further by eliminating a need to write a separate method for each complex API.


### Creating edges

Use `byld gate expose [block-name]` to generate edges for each `Byld::Model` in the block. You could add additional query and mutations using the interface markup
`inf(RequestType) {ReturnType}` over it. Use `!` to end the methods to mark them as mutations.

You can also use `Byld::Edge` to create custom egdes and add your own methods to aggregate different interface methods across blocks.

```ruby
class OrderEdge < Byld::Edge
  include Orders

  inf(ID) {Order}
  def get_order(id)
    Order.client.get(id)
  end

  inf(CreateOrderReq) {Order}
  def create_order!(req)
    Order.client.create!(req)
  end

  inf(UpdateOrderReq) {Order}
  def update_order!(req)
    Order.client.update!(req)
  end

  inf(ID) {Order}
  def delete_order!(id)
    Order.client.delete!(id)
  end
end
```

### Joining models

Use join markup `join [ReturnType]` to aggregate models across different blocks, doing that would include the joining model as part of the parent model. For instance `join User` allows you to get customer model as part of order model. Now, you can get any customer fields in response along with the order.

Below `OrderEdge` is joined with `User`, `Payment`, `Shipping` to power the order summary UI.
```ruby
class OrderEdge < Byld::Edge
  include Order
  include Identity

  ...

  join User
  def customer(order)
    User.client.get(order.user_id)
  end

  join Payment
  def payment(order)
    Payment.client.get(order.payment_id)
  end

  join Shipping
  def delivery(order)
    Shipping.client.get(order.shipping_id)
  end

end
```

Now to from the order summary UI, the following GraphQL query can be issued. Similarly, multiple complex APIs can be powered without creating a separate method.

```graphql
query {
  getOrder(id: "z3dsbjn3223") {
    id
    totalPrice
    lineItems {
      qty
      totalPrice
        product {
          title
        }
      }
      customer {
        firstName
        address {
          street
          city
        }
      }
      payment {
        transaction_status
      }
      delivery {
        shipping_status
        estimated_delivery
      }
  }
}
```
