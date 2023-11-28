// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Koa from 'koa'

declare module 'Koa' {
  interface Context {
    request: {
      params: any
      body: any
    }
  }
}
