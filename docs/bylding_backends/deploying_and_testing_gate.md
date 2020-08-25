---
id: deploying_and_testing_gate
title: Deploying and testing gate
sidebar_label: Deploying and testing gate
---
## Deploy your gate

Use `byld deploy` to deploy the gate.

When the block changes, you need to expose the block and deploy the gate again.

```sh
$ byld deploy
```
## Querying the gate

Use `byld status` to see the status of the gate and blocks.

```sh
$ byld status

+-------------------------------+------------------------------+--------------------------+
| status  | url                 | gate docs                    | blocks docs              |
+-------------------------------+------------------------------+--------------------------+
| running | amazon.letsbyld.com | amazon.letsbyld.com/graphiql | amazon.letsbyld.com/docs |
+---------+---------------------+------------------------------+--------------------------+

blocks

+----------+------------+
| name     | status     |
+----------+------------+
| order    | running    |
| identity | running    |
+----------+------------+
```
You can use `amazon.letsbyld.com` url to power your UI across different
platforms. Use the `amazon.letsbyld.com/graphiql` url to view docs and test out your
endpoints.

You can learn more about using GraphQL in [GraphQL queries and mutations guide](https://graphql.org/learn/queries/)

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
