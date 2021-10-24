/**
 * @param {() => (Promise<void> | void)} func
 * @param {{ retries?: number }} [options]
 */
export async function retry(func, { retries = 3 } = {}) {
  let i = 1

  do {
    try {
      await func()
      break
    } catch (err) {
      if (i === retries) {
        console.error('Out of retries')
        throw err
      }

      console.info('Error occured but will retry', err)
      i += 1
    }
  } while (true)
}
