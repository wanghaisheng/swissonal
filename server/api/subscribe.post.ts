import { sql } from '@vercel/postgres'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email } = body

  try {
    await sql`INSERT INTO subscribers (email) VALUES (${email});`
    return { message: 'Subscribed successfully!' }
  }
  catch (error) {
    throw new Error('Subscription failed')
  }
})
