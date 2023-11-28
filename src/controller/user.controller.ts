import { Context, Next } from 'koa'
import userService from '../service/user.service'

class UserController {
  async list(ctx: Context, next: Next) {
    const result = await userService.list()
    ctx.body = result
    await next()
  }

  async info(ctx: Context, next: Next) {
    const result = await userService.info()
    ctx.body = result
    await next()
  }
}

const userController = new UserController()

export default userController
