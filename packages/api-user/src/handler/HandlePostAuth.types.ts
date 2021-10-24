export type Event = {
  request: {
    userAttributes: {
      'cognito:user_status': 'CONFIRMED'
      sub: string
      name: string
    }
  }
}
