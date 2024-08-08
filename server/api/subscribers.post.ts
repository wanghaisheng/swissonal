import fs from 'node:fs'
import path from 'node:path'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { password } = body

  if (password !== 's238b238bd%syuiqahi33biasbdv23gd237982dg!@')
    throw new Error('Unauthorized')

  const filePath = path.resolve('subscribers.txt')

  try {
    fs.readFileSync(filePath).toString()
    return { list: fs.readFileSync(filePath).toString() }
  }
  catch (error) {
    throw new Error('Get failed')
  }
})
