import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb'
import { marshall } from '@aws-sdk/util-dynamodb'

const client = new DynamoDBClient({ apiVersion: '2012-08-10' })

export class UserAlreadyExists extends Error {
  constructor() {
    super('User already exists in the database')
  }
}

/**
 * @param {import('@filips_app/types').User} user
 */
export async function create(user) {
  const command = new PutItemCommand({
    TableName: process.env.APP_USER_TABLE_NAME,
    Item: marshall(user),
    ConditionExpression: 'attribute_not_exists(#id)',
    ExpressionAttributeNames: { '#id': 'id' },
  })

  try {
    console.info('Creating user', { user })
    await client.send(command)
  } catch (error) {
    const sdkError = /** @type {import('@aws-sdk/types').SdkError} */ (error)

    if (sdkError.name === 'ConditionalCheckFailedException') {
      console.info('User already exists', { user })
      throw new UserAlreadyExists()
    }

    console.error('Failed to create user in the database')
    throw sdkError
  }
}
