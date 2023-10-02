import { BaseEndpoint } from "./Base"

export class Webhook extends BaseEndpoint {
  public async get(query: any) {
    return this.httpClient.GET(`/webhooks`, { params: { query } })
  }

  public async getById(id: any) {
    return this.httpClient.GET(`/webhooks/{id}`, {
      params: { path: { id } }
    })
  }

  public async create(body: any) {
    return this.httpClient.POST(`/webhooks`, { body })
  }
}
