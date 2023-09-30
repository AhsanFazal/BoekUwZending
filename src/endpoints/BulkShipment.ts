import { operations } from "../lib/api"
import { BaseEndpoint } from "./Base"

export class BulkShipmentEndpoint extends BaseEndpoint {
  public async get(
    query: operations["getBulkShipmentCollection"]["parameters"]["query"]
  ) {
    return this.httpClient.GET("/bulk_shipments", { params: { query } })
  }

  public async getById(id: string) {
    return this.httpClient.GET(`/bulk_shipments/{id}`, {
      params: { path: { id } }
    })
  }
}
