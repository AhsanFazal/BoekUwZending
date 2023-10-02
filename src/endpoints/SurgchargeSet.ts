import { components, paths } from "../lib/api"
import { BaseEndpoint } from "./Base"

export class SurchargeSet extends BaseEndpoint {
  public async getById(id: string) {
    return this.httpClient.GET(`/surcharge_sets/{id}`, {
      params: { path: { id } }
    })
  }
}
