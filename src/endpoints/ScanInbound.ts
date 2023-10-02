import { BaseEndpoint } from "./Base"

export class ScanInbound extends BaseEndpoint {
  public async create(body: any) {
    return this.httpClient.POST("/scan_inbounds", { body })
  }

  public async getByUUID(uuid: any) {
    return this.httpClient.GET(`/scan_inbounds/{uuid}`, {
      params: { path: { uuid } }
    })
  }
}
