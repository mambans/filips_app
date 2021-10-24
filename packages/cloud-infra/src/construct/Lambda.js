import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { Code, Function, Runtime } from '@aws-cdk/aws-lambda'

export class Lambda extends Function {
  /**
   * @param {import('@aws-cdk/core').Construct} scope
   * @param {string} id
   * @param {object} props
   * @param {'api-user'} props.package
   * @param {string} props.handler
   * @param {{ [key: string]: string }} [props.environment]
   */
  constructor(scope, id, props) {
    const asset = resolve(
      dirname(fileURLToPath(import.meta.url)),
      '../../../',
      props.package,
      `build/${props.handler}`
    )

    super(scope, id, {
      runtime: Runtime.NODEJS_14_X,
      handler: `handler.handler`,
      code: Code.fromAsset(asset),
      environment: {
        NODE_OPTIONS: '--enable-source-maps',
        ...props.environment,
      },
    })
  }
}
