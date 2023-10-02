import { BaseEndpoint } from "./Base"

export class AdminUser extends BaseEndpoint {
  public async get(query: any) {
    return this.httpClient.GET("/admin_users", { params: { query } })
  }

  public async getById(id: any) {
    return this.httpClient.GET(`/admin_users/{id}`, {
      params: { path: { id } }
    })
  }
}
