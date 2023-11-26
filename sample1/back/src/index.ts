import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import 'dotenv/config'

import authRouter from './router/auth'

const app = express()

var whitelist = ['http://localhost:5173' /** other domains if any */]
var corsOptions = {
  credentials: true,
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())
app.use('/api/v1/auth', authRouter)

app.listen(process.env.PORT || 5000, () => console.log('server is up'))
