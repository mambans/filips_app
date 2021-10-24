import * as db from '../db.js'
import { randomString } from '../randomString.js'
import { retry } from '../retry.js'

/**
 * @param {import('./HandlePostAuth.types').Event} event
 */
export async function handler(event) {
  console.debug({ event: JSON.stringify(event) })

  if (event.request.userAttributes['cognito:user_status'] === 'CONFIRMED') {
    // We will do some retry logic in case of a rare event where there was
    // collision in the `code` property in database.
    await retry(async () => {
      try {
        await db.create({
          id: event.request.userAttributes.sub,
          name: event.request.userAttributes.name,
          code: randomString(),
          colleagues: [],
          projects: [],
        })
      } catch (error) {
        if (!(error instanceof db.UserAlreadyExists)) throw error
      }
    })
  }

  return event
}
