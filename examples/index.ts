import BoekUwZendingClient, { ClientConfig } from "../src"

const config: ClientConfig = {
  clientId: process.env.CLIENT_ID || "",
  clientSecret: process.env.CLIENT_SECRET || "",
  mode: "staging"
}

/**
 * This example shows how to get authenticated user information.
 */
async function getMe() {
  const client = await BoekUwZendingClient.create(config)

  try {
    const { data, error: _ } = await client.endpoints.me.get()
    return data
    /**
     * {
     *  name: "John Doe",                       // Customer name
     *  number: "123456",                       // Customer number
     *  id: "[UUID]",                           // Customer UUID
     *  conversation: "/conversations/[UUID]"   // Conversation URL
     * }
     *
     * The conversation URL can be used to retrieve the conversation history.
     * See the example below.
     */
  } catch (error) {
    throw error
  }
}

/**
 * This example shows how to get the conversation history of the authenticated user.
 */
async function getConversation() {
  const client = await BoekUwZendingClient.create(config)
  const { data: me, error: _ } = await client.endpoints.me.get()
  if (!me?.conversation) {
    throw new Error("Conversation path not found")
  }

  try {
    const { data, error: _ } = await client.endpoints.conversation.getById(
      me.conversation.split("/").pop() as string
    )
    return data
    /**
     * {
     *   shipment: null,
     *   shipmentQuotation: null,
     *   id: "[UUID]",
     *   createdAt: "[ISO 8601 date string]",
     *   updatedAt: "[ISO 8601 date string]",
     *   subject: 'Relatie John Doe',
     *   subjectType: 'relation',
     *   unreadMessages: 0,
     *   lastMessageUpdatedAt: '[ISO 8601 date string]',
     *   excerpt: "Hi John, ...",
     * }
     */
  } catch (error) {
    throw error
  }
}
