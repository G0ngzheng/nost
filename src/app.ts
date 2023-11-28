import Koa from 'koa'
import { routerRegister } from './router/index'
import bodyParser from 'koa-bodyparser'
import { wrapperMiddleware } from './middleware/wrapper.middle'
import errorHandler from './error'

const app = new Koa()

// 参数处理
app.use(bodyParser())
// 注册路由
routerRegister(app)

// 结果包装
app.use(wrapperMiddleware)

// 错误处理
app.on('error', errorHandler)

export default app
