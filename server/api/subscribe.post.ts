import { sql } from '@vercel/postgres'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email } = body

  try {
    await sql`INSERT INTO subscribers (email) VALUES (${email});`
    return { message: 'Subscribed successfully!' }
  }
  catch (error: any) {
    if (error.code === '23505') {
      throw new Error('form-newsletter.message.email-already-subscribed')
    }

    throw new Error('form-newsletter.message.unknown-error')
  }
})
