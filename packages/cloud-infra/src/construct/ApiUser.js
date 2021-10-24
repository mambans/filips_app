import { Construct, RemovalPolicy } from '@aws-cdk/core'
import { AttributeType, Table } from '@aws-cdk/aws-dynamodb'
import { UserPoolOperation } from '@aws-cdk/aws-cognito'
import { Lambda } from './Lambda.js'

export class ApiUser extends Construct {
  /**
   * @param {import('@aws-cdk/core').Construct} scope
   * @param {string} id
   * @param {object} props
   * @param {import('@aws-cdk/aws-cognito').UserPool} props.userPool
   */
  constructor(scope, id, props) {
    super(scope, id)

    const table = new Table(this, 'Table', {
      partitionKey: { name: 'id', type: AttributeType.STRING },
      removalPolicy:
        process.env.NODE_ENV === 'production'
          ? RemovalPolicy.SNAPSHOT
          : RemovalPolicy.DESTROY,
    })

    const handlePostAuthFunc = new Lambda(this, 'HandlePostAuthFunc', {
      package: 'api-user',
      handler: 'HandlePostAuth',
      environment: {
        APP_USER_TABLE_NAME: table.tableName,
      },
    })

    table.grantReadWriteData(handlePostAuthFunc)

    props.userPool.addTrigger(
      UserPoolOperation.POST_AUTHENTICATION,
      handlePostAuthFunc
    )
  }
}
