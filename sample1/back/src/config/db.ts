import { Pool } from 'pg'

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB,
  port: +process.env.DB_PORT!,
  password: process.env.DB_PASSWORD
})

export default pool
