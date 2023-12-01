import Koa from 'koa'
import staticServe from 'koa-static'
import logger from 'koa-logger'
import { routerRegister } from './router/index'
import bodyParser from 'koa-bodyparser'
import { wrapperMiddleware } from './middleware/wrapper.middle'
import errorHandler from './error'

const app = new Koa()

// handle static
app.use(staticServe(`${__dirname}/static`))

// handle logger
app.use(logger())

// handle request
app.use(bodyParser())

// handle router
routerRegister(app)

// handle wrapper
app.use(wrapperMiddleware)

// handle error
app.on('error', errorHandler)

export default app
