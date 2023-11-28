import { Context } from 'koa'

export const wrapperMiddleware = async (ctx: Context) => {
  const { body, status } = ctx

  ctx.body = {
    ret: status === 200 ? 0 : -1,
    data: status === 200 ? body : null,
    message: status === 200 ? 'success' : body,
  }
}
