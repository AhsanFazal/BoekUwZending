import BoekUwZendingClient from "../src"

async function main() {
  const client = await BoekUwZendingClient.create({
    clientId: "[CLIENT_ID]",
    clientSecret: "[CLIENT_SECRET]"
  })

  const { data, error } = await client.externalOrders.get({
    _items_per_page: 10,
    _page: 1
  })

  // Do something with the data or handle the error...
}

main()
