import app from './app'
import { SERVER_HOST, SERVER_PORT } from './config/server.config'

app.listen(SERVER_PORT, SERVER_HOST, () => {
  console.log(`server start at ${SERVER_HOST}:${SERVER_PORT}`)
})
