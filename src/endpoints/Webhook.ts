import { components, paths } from "../lib/api"
import { BaseEndpoint } from "./Base"

export class Webhook extends BaseEndpoint {
  public async get(query: paths["/webhooks"]["get"]["parameters"]["query"]) {
    return this.httpClient.GET(`/webhooks`, { params: { query } })
  }

  public async getById(id: string) {
    return this.httpClient.GET(`/webhooks/{id}`, {
      params: { path: { id } }
    })
  }

  public async create(body: components["schemas"]["Webhook-webhook-write"]) {
    return this.httpClient.POST(`/webhooks`, { body })
  }
}
