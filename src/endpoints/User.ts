import { components, operations } from "../lib/api"
import { BaseEndpoint } from "./Base"

export class UserEndpoint extends BaseEndpoint {
  public async get(
    query: operations["getUserCollection"]["parameters"]["query"]
  ) {
    return this.httpClient.GET("/users", { params: { query } })
  }

  public async create(
    body: components["schemas"]["User-user-collection-write"]
  ) {
    return this.httpClient.POST("/users", { body })
  }

  public async getById(id: string) {
    return this.httpClient.GET(`/users/{id}`, { params: { path: { id } } })
  }
}
