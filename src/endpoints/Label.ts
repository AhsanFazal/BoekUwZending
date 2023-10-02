import { BaseEndpoint } from "./Base"

export class Label extends BaseEndpoint {
  public async getById(id: any) {
    return this.httpClient.GET("/labels/{id}", { params: { path: { id } } })
  }
}
