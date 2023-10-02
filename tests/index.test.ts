import BoekUwZendingClient, { ClientConfig } from "../src"
import * as endpoints from "../src/endpoints"

describe("BoekUwZendingClient", () => {
  let client: BoekUwZendingClient

  beforeEach(() => {
    const config: ClientConfig = {
      clientId: "test",
      clientSecret: "test",
      mode: "staging"
    }
    client = new BoekUwZendingClient(config)
  })

  it("should initialize with all defined endpoints", () => {
    // Loop through each key in the 'endpoints' object
    for (const key in endpoints) {
      if (Object.prototype.hasOwnProperty.call(endpoints, key)) {
        // Convert the first letter to lowercase
        const lowerCaseKey = key.charAt(0).toLowerCase() + key.slice(1)
        // Check if the client has this endpoint initialized
        expect((client.endpoints as any)[lowerCaseKey]).toBeDefined()
        // Optionally, check if it's an instance of the correct class
        expect((client.endpoints as any)[lowerCaseKey]).toBeInstanceOf(
          (endpoints as any)[key]
        )
      }
    }
  })

  it("should select the correct base URL", () => {
    expect(client.baseURL).toEqual("https://staging.api.boekuwzending.com")
  })
})
