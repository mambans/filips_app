namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV?: 'production' | 'development'
    readonly CDK_DEPLOY_REGION?: string
    readonly CDK_DEPLOY_ACCOUNT?: string
    readonly CDK_DEFAULT_ACCOUNT: string
    readonly CDK_DEFAULT_REGION: string
    readonly APP_STACK_NAME: string
  }
}
