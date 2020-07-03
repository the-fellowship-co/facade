---
id: communicating_between_blocks
title: Communicating between blocks
sidebar_label: Communicating between blocks
---

### Synchronous Communication

Blocks could access the marked up interface methods from the another block in a synchronous manner. In below case `Stock` model in `inventory` block exposes a bunch of methods.

```ruby
class Stock < Byld::Model
  expose only: [:get, :update]

  inf(ID) {Bool}
  def self.available?(product_id)
    stock = Stock.find(product_id: id)
    stock.qty > 0
  end

end
```

Use `byld connect [block-name]` to enable sync communication between blocks.

```sh
$ byld connect inventory
```

After this you should be able to call all the exposed methods (`:get`, `:update`, `:available?`) from `Stock` in another block using the `[Model]Service.client`.

```ruby
StockService.client.available?(productId)
```

### Asynchronous Communication

Mark any model as publisher using the `publisher on: [channel_name]` markup.
By default model’s creation, update and deletion events are published when the
model is marked. Use `publish(:event_name, model)`  to publish custom events
on the channel.

#### Publisher

Use `publish(:event_name)` to send a message to multiples blocks using our
pub/sub system.

```ruby
class Order < Byld::Model
  publisher on: order_events

  def place!
    ...
    publish(:order_placed)
  end
end
```
#### Subscriber

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
      order = OrderService.client.get(event.source_id)
      order.lineitem.each |item|
         stock = Stock.find(product_id: item.product_id)
         stock.quantity -= item.quantity
         stock.save
      end
    ...
  end
end
```

