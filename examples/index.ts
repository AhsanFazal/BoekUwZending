import BoekUwZendingClient from "../src"

const CLIENT_ID = process.env.CLIENT_ID || ""
const CLIENT_SECRET = process.env.CLIENT_SECRET || ""

/**
 * The address book is a list of addresses that can be used in other requests.
 * This example shows how to get the address book of the authenticated user.
 */
async function getAddressBook() {
  const client = await BoekUwZendingClient.create({
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET
  })

  try {
    const { data, error: _ } = await client.addressBook.get({
      _items_per_page: 10
    })
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}

getAddressBook()
