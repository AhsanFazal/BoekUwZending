import { components, operations, paths } from "../lib/api"
import { BaseEndpoint } from "./Base"

export class ConversationEndpoint extends BaseEndpoint {
  public async get(
    query: operations["getConversationCollection"]["parameters"]["query"]
  ) {
    return this.httpClient.GET("/conversations", { params: { query } })
  }

  public async getById(id: string) {
    return this.httpClient.GET(`/conversations/{id}`, {
      params: { path: { id } }
    })
  }

  public async post(
    body: components["schemas"]["Conversation-conversation-write"]
  ) {
    return this.httpClient.POST("/conversations", { body })
  }

  public async getMessages(id: string) {
    return this.httpClient.GET(`/conversations/{id}/messages`, {
      params: { path: { id } }
    })
  }
}
