import { components, paths } from "../lib/api"
import { BaseEndpoint } from "./Base"

export class Shipment extends BaseEndpoint {
  public async get(query: paths["/shipments"]["get"]["parameters"]["query"]) {
    return this.httpClient.GET("/shipments", { params: { query } })
  }

  public async create(body: components["schemas"]["Shipment-shipment-write"]) {
    return this.httpClient.POST("/shipments", { body })
  }

  public async getById(id: string) {
    return this.httpClient.GET(`/shipments/{id}`, { params: { path: { id } } })
  }

  public async getShipmentItemsById(id: string) {
    return this.httpClient.GET(`/shipments/items/{id}`, {
      params: { path: { id } }
    })
  }

  public async getShipmentLabels(
    id: string,
    query: paths["/shipments/{id}/labels"]["get"]["parameters"]["query"]
  ) {
    return this.httpClient.GET(`/shipments/{id}/labels`, {
      params: { path: { id }, query }
    })
  }

  public async getQuotations(
    query: paths["/shipment_quotations"]["get"]["parameters"]["query"]
  ) {
    return this.httpClient.GET(`/shipment_quotations`, { params: { query } })
  }

  public async getQuotationById(id: string) {
    return this.httpClient.GET(`/shipment_quotations/{id}`, {
      params: { path: { id } }
    })
  }
}
