---
id: doordash
title: Building a doordash clone
sidebar_label: Building a doordash clone
---

Amazon Go business would organize their backends logic as follows

**Gateway**

+ Exposes all domain methods as GraphQL endpoints
+ Join mutliple domain methods without an orchestration layer. Ex: GetOrder can customize and fetch user information from identity domain, payment information from payment domain and so on.
+ Implements request throttling
+ Performs authentication and authorization

**Domains**

+ **Identity** for user management
+ **Catalog** for product listing
+ **Inventory** for recording availability
+ **Order** for user orders
+ **Payment** for user and vendor payments
+ **Communication** for user and vendor notifications like email, SMS
+ **Invoice** for book keeping, discounts,
