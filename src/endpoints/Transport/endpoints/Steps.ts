import { BaseEndpoint } from "../../Base"

export class Steps extends BaseEndpoint {
  public async get(query: any) {
    return this.httpClient.GET("/transport/steps", { params: { query } })
  }

  public async getById(id: any) {
    return this.httpClient.GET(`/transport/steps/{id}`, {
      params: { path: { id } }
    })
  }

  public async deleteById(id: any) {
    return this.httpClient.DELETE(`/transport/steps/{id}`, {
      params: { path: { id } }
    })
  }
}
