import mysql2 from 'mysql2'
import * as DB from '../config/db.config'

const connection = mysql2
  .createPool({
    host: DB.DATABASE_HOST,
    port: DB.DATABASE_PORT,
    user: DB.DATABASE_USER,
    password: DB.DATABASE_PASSWORD,
    database: DB.DATABASE_NAME,
  })
  .promise()

export default connection
