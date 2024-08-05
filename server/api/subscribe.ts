import fs from 'node:fs'
import path from 'node:path'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email } = body

  const filePath = path.resolve('subscribers.csv')

  try {
    fs.appendFileSync(filePath, `${email}\n`)
    return { message: 'Subscribed successfully!' }
  }
  catch (error) {
    throw new Error('Subscription failed')
  }
})
