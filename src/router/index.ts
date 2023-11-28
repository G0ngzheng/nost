import Application from 'koa'
import userRouter from './user.router'

const routers = [userRouter]

export const routerRegister = (app: Application) => {
  routers.forEach((router) => {
    app.use(router.routes())
    app.use(router.allowedMethods())
  })
}
