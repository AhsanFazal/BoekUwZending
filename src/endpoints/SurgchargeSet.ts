import { BaseEndpoint } from "./Base"

export class SurchargeSet extends BaseEndpoint {
  public async getById(id: any) {
    return this.httpClient.GET(`/surcharge_sets/{id}`, {
      params: { path: { id } }
    })
  }
}
