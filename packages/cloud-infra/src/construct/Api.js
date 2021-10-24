import { Construct } from '@aws-cdk/core'
import { ApiUser } from './ApiUser.js'

export class Api extends Construct {
  /**
   * @param {import('@aws-cdk/core').Construct} scope
   * @param {string} id
   * @param {object} props
   * @param {import('@aws-cdk/aws-cognito').UserPool} props.userPool
   */
  constructor(scope, id, { userPool }) {
    super(scope, id)

    new ApiUser(this, 'User', { userPool })
  }
}
