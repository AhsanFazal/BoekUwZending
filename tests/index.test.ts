import BoekUwZendingClient, { ClientConfig } from "../src"
import * as endpoints from "../src/endpoints"

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        token_type: "Bearer",
        expires_in: 3600,
        access_token: "test"
      }),
    ok: true,
    status: 200,
    statusText: "OK"
  } as Response)
)

describe("BoekUwZendingClient", () => {
  let client: BoekUwZendingClient

  beforeAll(async () => {
    const config: ClientConfig = {
      clientId: "test",
      clientSecret: "test",
      mode: "production"
    }
    client = await BoekUwZendingClient.create(config)
  })

  it("should initialize with all defined endpoints", () => {
    for (const key in endpoints) {
      if (Object.prototype.hasOwnProperty.call(endpoints, key)) {
        const lowerCaseKey = key.charAt(0).toLowerCase() + key.slice(1)
        expect((client.endpoints as any)[lowerCaseKey]).toBeDefined()
        expect((client.endpoints as any)[lowerCaseKey]).toBeInstanceOf(
          (endpoints as any)[key]
        )
      }
    }
  })

  it("should select the correct base URL", () => {
    expect(client.baseURL).toEqual("https://api.boekuwzending.com")
  })
})
