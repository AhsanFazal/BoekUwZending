import { BaseEndpoint } from "./Base"

export class User extends BaseEndpoint {
  public async get(query: any) {
    return this.httpClient.GET("/users", { params: { query } })
  }

  public async create(body: any) {
    return this.httpClient.POST("/users", { body })
  }

  public async getById(id: any) {
    return this.httpClient.GET(`/users/{id}`, { params: { path: { id } } })
  }
}
