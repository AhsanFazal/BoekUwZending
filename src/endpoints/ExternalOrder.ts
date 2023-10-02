import { paths, components } from "../lib/api"
import { BaseEndpoint } from "./Base"

type WriteSchema = components["schemas"]["ExternalOrder-order-write"]

export class ExternalOrder extends BaseEndpoint {
  public async get(query: paths["/orders"]["get"]["parameters"]["query"]) {
    return this.httpClient.GET("/orders", { params: { query } })
  }

  public async create(body: WriteSchema) {
    return this.httpClient.POST("/orders", { body })
  }

  public async getById(id: string) {
    return this.httpClient.GET(`/orders/{id}`, { params: { path: { id } } })
  }

  public async updateById(id: string, body: WriteSchema) {
    return this.httpClient.PUT(`/orders/{id}`, {
      params: { path: { id } },
      body
    })
  }

  public async deleteById(id: string) {
    return this.httpClient.DELETE(`/orders/{id}`, { params: { path: { id } } })
  }
}
