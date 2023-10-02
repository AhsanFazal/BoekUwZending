import { BaseEndpoint } from "./Base"

export class BulkShipment extends BaseEndpoint {
  public async get(query: any) {
    return this.httpClient.GET("/bulk_shipments", { params: { query } })
  }

  public async getById(id: any) {
    return this.httpClient.GET(`/bulk_shipments/{id}`, {
      params: { path: { id } }
    })
  }
}
