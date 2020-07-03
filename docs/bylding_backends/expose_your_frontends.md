---
id: expose_your_blocks
title: Expose your blocks
sidebar_label: Expose your blocks
---

Use `byld gate expose [block-name]` to generate an edge to the frontend. It'll generate one edge for every `Byld::Model` in that block. 

Edge is collection of queries, mutations and joins for that model.

```sh
$ byld gate expose order
```

#### Structure of a gate

```sh
gate/
├── Gemfile
└── edges
    └── identity_edge.rb
    └── inventory_edge.rb
    └── order_edge.rb
    └── payment_edge.rb
    └── communication_edge.rb
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

```sh
$ byld deploy
```
### Querying the gate

Use `byld status` to see the status of the gate and blocks.

```sh
$ byld status
```
Use the `/graphiql` url to start GraphiQL in your browser, there you could view docs and test out your endpoints. 

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
