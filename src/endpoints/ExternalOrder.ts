import { BaseEndpoint } from "./Base"

export class ExternalOrder extends BaseEndpoint {
  public async get(query: any) {
    return this.httpClient.GET("/orders", { params: { query } })
  }

  public async create(body: any) {
    return this.httpClient.POST("/orders", { body })
  }

  public async getById(id: any) {
    return this.httpClient.GET(`/orders/{id}`, { params: { path: { id } } })
  }

  public async updateById(id: any, body: any) {
    return this.httpClient.PUT(`/orders/{id}`, {
      params: { path: { id } },
      body
    })
  }

  public async deleteById(id: any) {
    return this.httpClient.DELETE(`/orders/{id}`, { params: { path: { id } } })
  }
}
