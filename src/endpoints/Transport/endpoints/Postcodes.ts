import { BaseEndpoint } from "../../Base"

export class Postcodes extends BaseEndpoint {
  public async get(query: any) {
    return this.httpClient.GET("/transport/postcodes", { params: { query } })
  }

  public async create(body: any) {
    return this.httpClient.POST("/transport/postcodes", { body })
  }

  public async getById(id: any) {
    return this.httpClient.GET(`/transport/postcodes/{id}`, {
      params: { path: { id } }
    })
  }

  public async updateById(id: any, body: any) {
    return this.httpClient.PUT(`/transport/postcodes/{id}`, {
      params: { path: { id } },
      body
    })
  }

  public async deleteById(id: any) {
    return this.httpClient.DELETE(`/transport/postcodes/{id}`, {
      params: { path: { id } }
    })
  }
}
