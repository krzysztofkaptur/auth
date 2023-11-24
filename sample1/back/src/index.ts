import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import authRouter from './router/auth'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/v1/auth', authRouter)

app.listen(process.env.PORT || 5000, () => console.log('server is up'))
