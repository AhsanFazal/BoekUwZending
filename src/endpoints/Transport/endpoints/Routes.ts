import { BaseEndpoint } from "../../Base"

export class Routes extends BaseEndpoint {
  public async get(query: any) {
    return this.httpClient.GET("/transport/routes", { params: { query } })
  }

  public async getById(id: any) {
    return this.httpClient.GET(`/transport/routes/{id}`, {
      params: { path: { id } }
    })
  }

  public async updateById(id: any, body: any) {
    return this.httpClient.PUT(`/transport/routes/{id}`, {
      params: { path: { id } },
      body
    })
  }

  public async getStepsById(id: any) {
    return this.httpClient.GET(`/transport/routes/{id}/steps`, {
      params: { path: { id } }
    })
  }

  public collections = {
    get: (query: any) =>
      this.httpClient.GET("/transport/route_collections", {
        params: { query }
      }),
    getById: (id: any) =>
      this.httpClient.GET(`/transport/route_collections/{id}`, {
        params: { path: { id } }
      }),
    create: (body: any) =>
      this.httpClient.POST("/transport/route_collections", { body }),
    updateById: (id: any, body: any) =>
      this.httpClient.PUT(`/transport/route_collections/{id}`, {
        params: { path: { id } },
        body
      })
  }
}
