import { components, paths } from "../lib/api"
import { BaseEndpoint } from "./Base"

export class Service extends BaseEndpoint {
  public async create(body: components["schemas"]["Shipment-shipment-write"]) {
    return this.httpClient.POST("/services", { body })
  }

  public async getById(id: string) {
    return this.httpClient.GET(`/services/{id}`, { params: { path: { id } } })
  }
}
