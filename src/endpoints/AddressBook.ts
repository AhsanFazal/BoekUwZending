import { BaseEndpoint } from "./Base"

export class AddressBook extends BaseEndpoint {
  public async get(query: any) {
    return this.httpClient.GET("/address_book_items", { params: { query } })
  }

  public async getById(id: any) {
    return this.httpClient.GET(`/address_book_items/{id}`, {
      params: { path: { id } }
    })
  }
}
