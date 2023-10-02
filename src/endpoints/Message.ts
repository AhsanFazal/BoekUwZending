import { components, operations } from "../lib/api"
import { BaseEndpoint } from "./Base"

export class Message extends BaseEndpoint {
  public async create(body: components["schemas"]["Message-message-write"]) {
    return this.httpClient.POST("/messages", { body })
  }

  public async getById(id: string) {
    return this.httpClient.GET(`/messages/{id}`, { params: { path: { id } } })
  }

  public async updateById(
    id: string,
    body: components["schemas"]["Message-message-write"]
  ) {
    return this.httpClient.PATCH(`/messages/{id}`, {
      params: { path: { id } },
      body
    })
  }
}
