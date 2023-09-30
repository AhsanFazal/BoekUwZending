import { operations } from "../lib/api"
import { BaseEndpoint } from "./Base"

export class AddressBookEndpoint extends BaseEndpoint {
  public async get(
    query: operations["getAddressBookItemsCollection"]["parameters"]["query"]
  ) {
    return this.httpClient.GET("/address_book_items", { params: { query } })
  }

  public async getById(id: string) {
    return this.httpClient.GET(`/address_book_items/{id}`, {
      params: { path: { id } }
    })
  }
}
