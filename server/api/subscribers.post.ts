import { sql } from '@vercel/postgres'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { password } = body

  if (password !== 's238b238bd%syuiqahi33biasbdv23gd237982dg!@')
    throw new Error('Unauthorized')

  try {
    const { rows }
    = await sql`SELECT * FROM subscribers;`

    return { list: rows }
  }
  catch (error) {
    throw new Error('Get failed')
  }
})
