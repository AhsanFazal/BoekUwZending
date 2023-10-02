import { BaseEndpoint } from "./Base"

export class Message extends BaseEndpoint {
  public async create(body: any) {
    return this.httpClient.POST("/messages", { body })
  }

  public async getById(id: any) {
    return this.httpClient.GET(`/messages/{id}`, { params: { path: { id } } })
  }

  public async updateById(id: any, body: any) {
    return this.httpClient.PATCH(`/messages/{id}`, {
      params: { path: { id } },
      body
    })
  }
}
