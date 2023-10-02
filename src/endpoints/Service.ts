import { BaseEndpoint } from "./Base"

export class Service extends BaseEndpoint {
  public async create(body: any) {
    return this.httpClient.POST("/services", { body })
  }

  public async getById(id: any) {
    return this.httpClient.GET(`/services/{id}`, { params: { path: { id } } })
  }
}
