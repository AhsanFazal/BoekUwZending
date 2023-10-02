import { BaseEndpoint } from "./Base"

export class Conversation extends BaseEndpoint {
  public async get(query: any) {
    return this.httpClient.GET("/conversations", { params: { query } })
  }

  public async getById(id: any) {
    return this.httpClient.GET(`/conversations/{id}`, {
      params: { path: { id } }
    })
  }

  public async post(body: any) {
    return this.httpClient.POST("/conversations", { body })
  }

  public async getMessages(id: any) {
    return this.httpClient.GET(`/conversations/{id}/messages`, {
      params: { path: { id } }
    })
  }
}
