import { Stack as BaseStack } from '@aws-cdk/core'
import { Auth } from './construct/Auth.js'

export class Stack extends BaseStack {
  /**
   * @param {import('@aws-cdk/core').Construct} scope
   * @param {string} id
   * @param {import('@aws-cdk/core').StackProps} props
   */
  constructor(scope, id, props) {
    super(scope, id, props)

    new Auth(this, `${id}Auth`)
  }
}
