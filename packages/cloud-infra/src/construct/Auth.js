import kebabCase from 'lodash.kebabcase'
import { Construct } from '@aws-cdk/core'
import { UserPool, UserPoolClientIdentityProvider } from '@aws-cdk/aws-cognito'

export class Auth extends Construct {
  /**
   * @param {import('@aws-cdk/core').Construct} scope
   * @param {string} id
   */
  constructor(scope, id) {
    super(scope, id)

    /** @readonly */
    this.userPool = new UserPool(this, `${id}UserPool`)

    this.userPool.addDomain('CognitoDomain', {
      cognitoDomain: { domainPrefix: kebabCase(id) },
    })

    if (process.env.NODE_ENV !== 'production') {
      this.userPool.addClient('DeveloperTestClient', {
        supportedIdentityProviders: [UserPoolClientIdentityProvider.COGNITO],
        oAuth: {
          flows: {
            implicitCodeGrant: true,
          },
          callbackUrls: ['http://localhost:8080'],
          logoutUrls: ['http://localhost:8080'],
        },
      })
    }
  }
}
