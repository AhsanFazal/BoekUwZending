# BoekUwZending TypeScript API Client

[![Build Status](https://github.com/AhsanFazal/BoekUwZending/actions/workflows/build.yml/badge.svg)](https://github.com/AhsanFazal/BoekUwZending/actions)
[![NPM Version](https://img.shields.io/npm/v/boekuwzending-api.svg)](https://www.npmjs.com/package/boekuwzending-api)
[![NPM Downloads](https://img.shields.io/npm/dm/boekuwzending-api.svg)](https://www.npmjs.com/package/boekuwzending-api)

Unofficial TypeScript API client for the [BoekUwZending API](https://api.boekuwzending.com/docs/).

## Installation


### npm

```bash
npm install boekuwzending-api
```

### yarn

```bash
yarn add boekuwzending-api
```

## Usage

### Creating a client

```typescript
import { BoekUwZendingClient } from "boekuwzending-api"

const client = new BoekUwZendingClient({
  clientId: "[CLIENT_ID]",
  clientSecret: "[CLIENT_SECRET]"
  mode: "production" // or 'staging' (optional)
})
```

### Getting all orders

```typescript
import { BoekUwZendingClient } from "boekuwzending-api"

const client = await BoekUwZendingClient.create({
  clientId: "[CLIENT_ID]",
  clientSecret: "[CLIENT_SECRET]"
})

const { data: externalOrders, error: _ } = await client.endpoints.externalOrders.get({
  _items_per_page: 10,
  _page: 1
})
```


## API Implementation Status

### Current User

| Endpoint | GET | POST | PUT | DELETE |
| -------- | --- | ---- | --- | ------ |
| **/me**  | ✅   | -    | -   | -      |

### Orders

| Endpoint         | GET | POST | PUT | DELETE |
| ---------------- | --- | ---- | --- | ------ |
| **/orders**      | ✅   | ✅    | -   | -      |
| **/orders/{id}** | ✅   | -    | ✅   | ✅      |


### Users

| Endpoint        | GET | POST | PUT | DELETE |
| --------------- | --- | ---- | --- | ------ |
| **/users**      | ✅   | ✅    | -   | -      |
| **/users/{id}** | ✅   | -    | -   | -      |

### Admin Users

| Endpoint              | GET | POST | PUT | DELETE |
| --------------------- | --- | ---- | --- | ------ |
| **/admin_users**      | ✅   | -    | -   | -      |
| **/admin_users/{id}** | ✅   | -    | -   | -      |


### Address Book

| Endpoint                     | GET | POST | PUT | DELETE |
| ---------------------------- | --- | ---- | --- | ------ |
| **/address_book_items**      | ✅   | -    | -   | -      |
| **/address_book_items/{id}** | ✅   | -    | -   | -      |

### Bulk Shipments

| Endpoint                 | GET | POST | PUT | DELETE |
| ------------------------ | --- | ---- | --- | ------ |
| **/bulk_shipments**      | ✅   | -    | -   | -      |
| **/bulk_shipments/{id}** | ✅   | -    | -   | -      |


### Buzzie

| Endpoint              | GET | POST | PUT | DELETE |
| --------------------- | --- | ---- | --- | ------ |
| **/buzzie/postcodes** | ✅   | -    | -   | -      |


### Conversations

| Endpoint                         | GET | POST | PUT | DELETE |
| -------------------------------- | --- | ---- | --- | ------ |
| **/conversations**               | ✅   | ✅    | -   | -      |
| **/conversations/{id}**          | ✅   | -    | -   | -      |
| **/conversations/{id}/messages** | ✅   | -    | -   | -      |

### Countries

| Endpoint            | GET | POST | PUT | DELETE |
| ------------------- | --- | ---- | --- | ------ |
| **/countries**      | ✅   | -    | -   | -      |
| **/countries/{id}** | ✅   | -    | -   | -      |

### Distributors

| Endpoint               | GET | POST | PUT | DELETE |
| ---------------------- | --- | ---- | --- | ------ |
| **/distributors**      | ✅   | -    | -   | -      |
| **/distributors/{id}** | ✅   | -    | -   | -      |


### Integrations

| Endpoint                       | GET | POST | PUT | DELETE |
| ------------------------------ | --- | ---- | --- | ------ |
| **/integrations**              | ✅   | -    | -   | -      |
| **/integrations/shopify**      | -   | ✅    | -   | -      |
| **/integrations/shopify/{id}** | ✅   | -    | -   | -      |
| **/integrations/{id}**         | ✅   | -    | -   | -      |

### Labels

| Endpoint         | GET | POST | PUT | DELETE |
| ---------------- | --- | ---- | --- | ------ |
| **/labels/{id}** | ✅   | -    | -   | -      |

### Matrix

| Endpoint                   | GET | POST | PUT | DELETE |
| -------------------------- | --- | ---- | --- | ------ |
| **/matrices**              | ✅   | -    | -   | -      |
| **/matrices/{id}**         | ✅   | -    | -   | -      |
| **/matrix_groups**         | ✅   | -    | -   | -      |
| **/matrix_groups/{id}**    | ✅   | -    | -   | -      |
| **/matrix_postcodes**      | ✅   | -    | -   | -      |
| **/matrix_postcodes/{id}** | ✅   | -    | -   | -      |
| **/matrix_rates**          | ✅   | -    | -   | -      |
| **/matrix_rates/{id}**     | ✅   | -    | -   | -      |

### Messages

| Endpoint           | GET | POST | PUT | DELETE |
| ------------------ | --- | ---- | --- | ------ |
| **/messages**      | -   | ✅    | -   | -      |
| **/messages/{id}** | ✅   | -    | ✅   | -      |


### Pickup Requests

| Endpoint                  | GET | POST | PUT | DELETE | PATCH |
| ------------------------- | --- | ---- | --- | ------ | ----- |
| **/pickup_requests**      | ✅   | ✅    | -   | -      | -     |
| **/pickup_requests/{id}** | ✅   | -    | ✅   | ✅      | ✅     |

### Rate Requests

| Endpoint          | GET | POST | PUT | DELETE | PATCH |
| ----------------- | --- | ---- | --- | ------ | ----- |
| **/rate-request** | -   | ✅    | -   | -      | -     |


### Relations

| Endpoint            | GET | POST | PUT | DELETE |
| ------------------- | --- | ---- | --- | ------ |
| **/relations**      | ✅   | -    | -   | -      |
| **/relations/{id}** | ✅   | -    | -   | -      |


### Scan Inbounds

| Endpoint                  | GET | POST | PUT | DELETE |
| ------------------------- | --- | ---- | --- | ------ |
| **/scan_inbounds**        | -   | ✅    | -   | -      |
| **/scan_inbounds/{uuid}** | ✅   | -    | -   | -      |

### Services

| Endpoint           | GET | POST | PUT | DELETE |
| ------------------ | --- | ---- | --- | ------ |
| **/services**      | -   | ✅    | -   | -      |
| **/services/{id}** | ✅   | -    | -   | -      |


### Shipments

| Endpoint                      | GET | POST | PUT | DELETE |
| ----------------------------- | --- | ---- | --- | ------ |
| **/shipment_quotations**      | ✅   | -    | -   | -      |
| **/shipment_quotations/{id}** | ✅   | -    | -   | -      |
| **/shipments**                | ✅   | ✅    | -   | -      |
| **/shipments/items/{id}**     | ✅   | -    | -   | -      |
| **/shipments/{id}**           | ✅   | -    | -   | -      |
| **/shipments/{id}/labels**    | ✅   | -    | -   | -      |

### Surcharge Sets

| Endpoint                 | GET | POST | PUT | DELETE | PATCH |
| ------------------------ | --- | ---- | --- | ------ | ----- |
| **/surcharge_sets/{id}** | ✅   | -    | -   | -      | -     |

### Track & Trace

| Endpoint                  | GET | POST | PUT | DELETE | PATCH |
| ------------------------- | --- | ---- | --- | ------ | ----- |
| **/track-and-trace/{id}** | ✅   | -    | -   | -      | -     |

### Tracking

| Endpoint            | GET | POST | PUT | DELETE | PATCH |
| ------------------- | --- | ---- | --- | ------ | ----- |
| **/trackings**      | ✅   | -    | -   | -      | -     |
| **/trackings/{id}** | ✅   | -    | -   | -      | -     |

### Types

| Endpoint        | GET | POST | PUT | DELETE | PATCH |
| --------------- | --- | ---- | --- | ------ | ----- |
| **/types**      | ✅   | -    | -   | -      | -     |
| **/types/{id}** | ✅   | -    | -   | -      | -     |

### Webhooks

| Endpoint           | GET | POST | PUT | DELETE | PATCH |
| ------------------ | --- | ---- | --- | ------ | ----- |
| **/webhooks**      | ✅   | ✅    | -   | -      | -     |
| **/webhooks/{id}** | ✅   | -    | -   | -      | -     |

### Widgets

| Endpoint          | GET | POST | PUT | DELETE | PATCH |
| ----------------- | --- | ---- | --- | ------ | ----- |
| **/widgets**      | ✅   | -    | -   | -      | -     |
| **/widgets/{id}** | ✅   | -    | -   | -      | -     |

### Transport

| Endpoint                                                        | GET | POST | PUT | DELETE | PATCH |
| --------------------------------------------------------------- | --- | ---- | --- | ------ | ----- |
| **/transport/depots**                                           | ✅   | ✅    | -   | -      | -     |
| **/transport/depots/{id}**                                      | ✅   | -    | ✅   | -      | ✅     |
| **/transport/drivers**                                          | ✅   | ✅    | -   | -      | -     |
| **/transport/drivers/{id}**                                     | ✅   | -    | ✅   | ✅      | ✅     |
| **/transport/excluded_pickups**                                 | ✅   | ✅    | -   | -      | -     |
| **/transport/excluded_pickups/{id}**                            | ✅   | -    | ✅   | -      | ✅     |
| **/transport/pickup_requests**                                  | ✅   | ✅    | -   | -      | -     |
| **/transport/pickup_requests/{id}**                             | ✅   | -    | ✅   | ✅      | ✅     |
| **/transport/pickup_schedules**                                 | ✅   | ✅    | -   | -      | -     |
| **/transport/pickup_schedules/{id}**                            | ✅   | -    | ✅   | -      | ✅     |
| **/transport/pickups**                                          | ✅   | -    | -   | -      | -     |
| **/transport/pickups/{id}**                                     | ✅   | -    | -   | -      | -     |
| **/transport/positions**                                        | ✅   | ✅    | -   | -      | -     |
| **/transport/positions/{id}**                                   | ✅   | -    | -   | -      | -     |
| **/transport/postcodes**                                        | ✅   | ✅    | -   | -      | -     |
| **/transport/postcodes/{id}**                                   | ✅   | -    | ✅   | ✅      | ✅     |
| **/transport/regions**                                          | ✅   | ✅    | -   | -      | -     |
| **/transport/regions/{id}**                                     | ✅   | -    | ✅   | -      | ✅     |
| **/transport/route_collection_bulks**                           | ❌   | ❌    | -   | -      | -     |
| **/transport/route_collection_bulks/{id}**                      | ❌   | -    | ❌   | -      | ❌     |
| **/transport/route_collection_vehicles**                        | ❌   | ❌    | -   | -      | -     |
| **/transport/route_collection_vehicles/{id}**                   | ❌   | -    | ❌   | ❌      | ❌     |
| **/transport/route_collections**                                | ✅   | ✅    | -   | -      | -     |
| **/transport/route_collections/{id}**                           | ✅   | -    | ✅   | -      | ✅     |
| **/transport/route_collections/{id}/route_collection_bulks**    | ❌   | -    | -   | -      | -     |
| **/transport/route_collections/{id}/route_collection_vehicles** | ❌   | -    | -   | -      | -     |
| **/transport/route_collections/{id}/routes**                    | ❌   | -    | -   | -      | -     |
| **/transport/route_collections/{id}/routes/{routes}/steps**     | ❌   | -    | -   | -      | -     |
| **/transport/route_collections/{id}/unassigneds**               | ❌   | -    | -   | -      | -     |
| **/transport/routes**                                           | ✅   | -    | -   | -      | -     |
| **/transport/routes/{id}**                                      | ✅   | -    | ✅   | -      | ✅     |
| **/transport/routes/{id}/steps**                                | ✅   | -    | -   | -      | -     |
| **/transport/statuses**                                         | ✅   | ✅    | -   | -      | -     |
| **/transport/statuses/{id}**                                    | ✅   | -    | -   | -      | -     |
| **/transport/steps**                                            | ✅   | -    | -   | -      | -     |
| **/transport/steps/{id}**                                       | ✅   | -    | -   | ✅      | -     |
| **/transport/task_activities**                                  | ✅   | -    | -   | -      | -     |
| **/transport/task_activities/{id}**                             | ✅   | -    | -   | -      | -     |
| **/transport/task_labels**                                      | ✅   | -    | -   | -      | -     |
| **/transport/task_labels/{id}**                                 | ✅   | -    | ✅   | -      | -     |
| **/transport/task_pickups**                                     | ✅   | -    | -   | -      | -     |
| **/transport/task_pickups/{id}**                                | ✅   | -    | ✅   | -      | -     |
| **/transport/tasks**                                            | ✅   | -    | -   | -      | -     |
| **/transport/tasks/{id}**                                       | ✅   | -    | ✅   | -      | -     |
| **/transport/unassigned_labels**                                | ❌   | -    | -   | -      | -     |
| **/transport/unassigned_labels/{id}**                           | ❌   | -    | -   | -      | -     |
| **/transport/unassigned_pickups**                               | ❌   | -    | -   | -      | -     |
| **/transport/unassigned_pickups/{id}**                          | ❌   | -    | -   | -      | -     |
| **/transport/unassigned_shipments**                             | ❌   | -    | -   | -      | -     |
| **/transport/unassigned_shipments/{id}**                        | ❌   | -    | -   | -      | -     |
| **/transport/unassigneds**                                      | ❌   | -    | -   | -      | -     |
| **/transport/unassigneds/{id}**                                 | ❌   | -    | -   | -      | -     |
| **/transport/vehicles**                                         | ❌   | ❌    | -   | -      | -     |
| **/transport/vehicles/{id}**                                    | ❌   | -    | ❌   | ❌      | ❌     |
| **/transport/warehouse/{waybill}/info**                         | ❌   | -    | -   | -      | -     |
| **/transport/warehouse_informations**                           | ❌   | -    | -   | -      | -     |

