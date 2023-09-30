import { components } from "../lib/api"
import { BaseEndpoint } from "./Base"

export class RateRequestEndpoint extends BaseEndpoint {
  public async create(body: components["schemas"]["Shipment-shipment-write"]) {
    return this.httpClient.POST("/rate-request", { body })
  }
}
