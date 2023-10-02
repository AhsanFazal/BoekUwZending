import { BaseEndpoint } from "./Base"

export class PickupRequest extends BaseEndpoint {
  public async get(query: any) {
    return this.httpClient.GET("/pickup_requests", { params: { query } })
  }

  public async getById(id: any) {
    return this.httpClient.GET(`/pickup_requests/{id}`, {
      params: { path: { id } }
    })
  }

  public async create(body: any) {
    return this.httpClient.POST("/pickup_requests", { body })
  }

  public async updateById(id: any, body: any) {
    return this.httpClient.PATCH(`/pickup_requests/{id}`, {
      params: { path: { id } },
      body
    })
  }

  public async deleteById(id: any) {
    return this.httpClient.DELETE(`/pickup_requests/{id}`, {
      params: { path: { id } }
    })
  }

  public async replaceById(id: any, body: any) {
    return this.httpClient.PUT(`/pickup_requests/{id}`, {
      params: { path: { id } },
      body
    })
  }
}
