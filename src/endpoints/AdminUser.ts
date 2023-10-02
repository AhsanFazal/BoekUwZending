import { operations } from "../lib/api"
import { BaseEndpoint } from "./Base"

export class AdminUser extends BaseEndpoint {
  public async get(
    query: operations["getAdminUserCollection"]["parameters"]["query"]
  ) {
    return this.httpClient.GET("/admin_users", { params: { query } })
  }

  public async getById(id: string) {
    return this.httpClient.GET(`/admin_users/{id}`, {
      params: { path: { id } }
    })
  }
}
