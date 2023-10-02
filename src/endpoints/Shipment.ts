import { BaseEndpoint } from "./Base"

export class Shipment extends BaseEndpoint {
  public async get(query: any) {
    return this.httpClient.GET("/shipments", { params: { query } })
  }

  public async create(body: any) {
    return this.httpClient.POST("/shipments", { body })
  }

  public async getById(id: any) {
    return this.httpClient.GET(`/shipments/{id}`, { params: { path: { id } } })
  }

  public async getShipmentItemsById(id: any) {
    return this.httpClient.GET(`/shipments/items/{id}`, {
      params: { path: { id } }
    })
  }

  public async getShipmentLabels(id: any, query: any) {
    return this.httpClient.GET(`/shipments/{id}/labels`, {
      params: { path: { id }, query }
    })
  }

  public async getQuotations(query: any) {
    return this.httpClient.GET(`/shipment_quotations`, { params: { query } })
  }

  public async getQuotationById(id: any) {
    return this.httpClient.GET(`/shipment_quotations/{id}`, {
      params: { path: { id } }
    })
  }
}
