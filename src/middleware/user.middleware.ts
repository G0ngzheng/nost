import { Context, Next } from 'koa'
import { UNAUTHORIZED } from '../error/user.errorTypes'

export const verifyParams = async (ctx: Context, next: Next) => {
  const { token } = ctx.request.body
  if (!token) {
    return ctx.app.emit('error', new Error(UNAUTHORIZED), ctx)
  }
  await next()
}
