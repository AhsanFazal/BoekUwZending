import { components, paths } from "../lib/api"
import { BaseEndpoint } from "./Base"

export class ScanInbound extends BaseEndpoint {
  public async create(
    body: components["schemas"]["ScanInbound-ScanInbound.Write"]
  ) {
    return this.httpClient.POST("/scan_inbounds", { body })
  }

  public async getByUUID(uuid: string) {
    return this.httpClient.GET(`/scan_inbounds/{uuid}`, {
      params: { path: { uuid } }
    })
  }
}
