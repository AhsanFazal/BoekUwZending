import { BaseEndpoint } from "../../Base"
import { components, operations } from "../../../lib/api"

export class Drivers extends BaseEndpoint {
  public async get(query: any) {
    return this.httpClient.GET("/transport/drivers", { params: { query } })
  }

  public async create(body: any) {
    return this.httpClient.POST("/transport/drivers", { body })
  }

  public async getById(id: any) {
    return this.httpClient.GET(`/transport/drivers/{id}`, {
      params: { path: { id } }
    })
  }

  public async updateById(id: any, body: any) {
    return this.httpClient.PATCH(`/transport/drivers/{id}`, {
      params: { path: { id } },
      body
    })
  }

  public async replaceById(id: any, body: any) {
    return this.httpClient.PUT(`/transport/drivers/{id}`, {
      params: { path: { id } },
      body
    })
  }

  public async deleteById(id: any) {
    return this.httpClient.DELETE(`/transport/drivers/{id}`, {
      params: { path: { id } }
    })
  }
}
