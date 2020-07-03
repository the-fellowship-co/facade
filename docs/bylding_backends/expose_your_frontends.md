---
id: expose_your_blocks
title: Expose your blocks
sidebar_label: Expose your blocks
---

Use `byld gate expose [block-name]` to generate an edge to the frontend. It'll generate a edge for every `Byld::Model` in that block.

```sh
$ byld gate expose order
```

#### Structure of a gate

Gate is a collection of edges. Edge is collection of queries, mutations and joins for the different models in your block.

```sh
gate/
├── Gemfile
└── edges
    └── user_edge.rb
    └── stock_edge.rb
    └── order_edge.rb
    └── payment_edge.rb
    └── conversation_edge.rb
```
You could add additional query and mutations using the interface markup
`inf(RequestType) {ReturnType}` over it.

```ruby
class OrderEdge < Byld::Edge
  include Orders

  inf(ID) {Order}
  def get_order(id)
    OrderService.client.get(id)
  end

  inf(CreateOrderReq) {Order}
  def create_order!(req)
    OrderService.client.create!(req)
  end

  inf(UpdateOrderReq) {Order}
  def update_order!(req)
    OrderService.client.update!(req)
  end

  inf(ID) {Order}
  def delete_order!(id)
    OrderService.client.delete!(id)
  end
end
```

### Joining blocks

Use join markup `join [ReturnType]` to compose models across different blocks, doing that would include the joining model as part of the parent model. For instance `join User` allows you to get customer model as part of order model.


```ruby
class OrderEdge < Byld::Edge
  include Order
  include Identity

  ...

  join User
  def customer(order)
    UserService.client.get(order.user_id)
  end

end
```

### Deploy your gate

Use `byld deploy` to deploy the gate.

When the block changes, you need to expose the block and deploy the gate again.

```sh
$ byld deploy
```
### Querying the gate

Use `byld status` to see the status of the gate and blocks.

```sh
$ byld status

+-------------------------------+------------------------------+
| status  | url                 | docs                         |
+--------------------------------+-----------------------------+
| running | amazon.letsbyld.com | amazon.letsbyld.com/graphiql |
+---------+---------------------+------------------------------+

blocks

+----------+------------+
| name     | status     |
+----------+------------+
| order    | running    |
| identity | running    |
+----------+------------+
```
You can use `amazon.letsbyld.com` url to power your UI across different
platforms.

Use the `amazon.letsbyld.com/graphiql` url to view docs and test out your
endpoints.

```graphql
query {
  getOrder(id: "z3dsbjn3223") {
    id
    totalPrice
    lineItems {
      id
      qty
      unitPrice
      totalPrice
      product {
        id
        title
      }
      customer {
        firstName
        lastName
        address {
          street
          city
          state
        }
      }
    }
  }
}
```

Finally use the hosted url to power your frontends.
