import BoekUwZendingClient from "../"
import createClient from "openapi-fetch"

// Mocking fetch and createClient
jest.mock("openapi-fetch")

const mockedFetch = fetch as jest.MockedFunction<typeof fetch>
const mockedCreateClient = createClient as jest.MockedFunction<
  typeof createClient
>

describe("BoekUwZendingClient", () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    mockedFetch?.mockClear()
    mockedCreateClient?.mockClear()
  })

  it("should authorize successfully", async () => {
    // Setup fetch to mock a successful authorization
    mockedFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        access_token: "some_access_token",
        expires_in: 3600
      })
    } as any)

    const config = {
      clientId: "testClient",
      clientSecret: "testSecret",
      mode: undefined,
      authorizationScopes: ["read", "write"]
    }

    const client = await BoekUwZendingClient.create(config)

    // Assertions
    expect(client).toBeInstanceOf(BoekUwZendingClient)
    // Add more assertions here based on what you expect `authorize` and `create` to do
  })

  // More test cases can be added
})
