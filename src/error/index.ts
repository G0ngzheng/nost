import { Context } from 'koa'
import * as userErrorTypes from './user.errorTypes'
import { wrapperMiddleware } from '../middleware/wrapper.middle'

const errorHandler = async (error: Error, ctx: Context) => {
  let status = 200
  let message = 'success'

  switch (error.message) {
    case userErrorTypes.UNAUTHORIZED:
      status = 302
      message = userErrorTypes.UNAUTHORIZED
      break
    default:
      break
  }

  ctx.status = status
  ctx.body = message

  await wrapperMiddleware(ctx)
}

export default errorHandler
