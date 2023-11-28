import Router from '@koa/router'
import userController from '../controller/user.controller'
import { verifyParams } from '../middleware/user.middleware'

const router = new Router({ prefix: '/user' })

router.get('/list', userController.list)

router.get('/info/:id', verifyParams, userController.info)

export default router
