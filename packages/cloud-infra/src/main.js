import { App } from '@aws-cdk/core'
import { Stack } from './Stack.js'

export function main() {
  const app = new App()

  const env = {
    account: process.env.CDK_DEPLOY_ACCOUNT || process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEPLOY_REGION || process.env.CDK_DEFAULT_REGION,
  }

  new Stack(app, process.env.APP_STACK_NAME, { env })
}
