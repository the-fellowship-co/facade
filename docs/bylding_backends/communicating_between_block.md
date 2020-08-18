---
id: communicating_between_blocks
title: Communicating between blocks
sidebar_label: Communicating between blocks
---
Communication between blocks is made simple compared to traditional backends. Synchronous requests to other blocks is a simple function call. For asynchronous requests, you can send and receive messages using the built-in messaging system without any additional setup.

## Connecting a block

You need to connect to a block from another block to invoke all its interface methods. Use `byld connect [block-name]` to enable sync communication between blocks.


## Synchronous Communication

Blocks could access the marked up interface methods from the another block in
a synchronous manner. In below case `Stock` model in `inventory` block exposes
`get`, `update` and `available?` method.

```ruby
class Stock < Byld::Model
  enable only: [:get, :update]

  inf(ID) {Bool}
  def self.available?(product_id)
    stock = Stock.find(product_id: id)
    stock.qty > 0
  end

end
```

From order block connect to inventory block using,

```sh
$ byld connect inventory
```

After this you should be able to call all the exposed methods (`:get`, `:update`, `:is_available`) from Stock in order block using the Stock.client.

```ruby
Stock.client.available?(productId)
```

## Asynchronous Communication

Mark any model as publisher using the `publisher on: [channel_name]` markup.
By default model’s creation, update and deletion events are published when the
model is marked. Use `publish(:event_name, model)`  to publish custom events
on the channel.

### Publisher

Use `publish(:event_name)` to send a message to multiples blocks using our
messaging system. By default, `:order_created`, `:order_updated` and
`:order_destroyed` events will be published when you add `publisher on: :[model]_events` to your model.

```ruby
class Order < Byld::Model
  publisher on: :order_events

  def place!
    ...
    publish(:order_placed)
  end
end
```
### Subscriber

Use the `subscriber` markup and name the method this way `handle_[channel_name]`
to subscribe events from a particular channel. Event object passed to the
subscriber method contains `type` and `source_id` of the model publishing it.

```ruby
class Stock < Byld::Model
  ...

  subscriber
  def self.handle_order_events(event)
    case event.type
    when :order_placed
      order = Order.client.get(event.source_id)
      order.lineitem.each |item|
         stock = Stock.find(product_id: item.product_id)
         stock.quantity -= item.quantity
         stock.save
      end
    ...
  end
end
```

