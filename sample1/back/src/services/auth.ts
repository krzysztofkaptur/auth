import { Request, Response } from 'express'
import bcrypt from 'bcrypt'

import pool from '../config/db'

export const loginService = async (req: Request, res: Response) => {
  const { email, password } = req.body

  const result = await pool.query('SELECT * FROM users WHERE email=$1;', [
    email
  ])

  const user = result.rows[0]

  const isValidPassword = await bcrypt.compare(password, user.password)

  if (isValidPassword) return res.send(user)

  return res.status(401).send({ message: 'Unauthorized' })
}

export const registerService = async (req: Request, res: Response) => {
  const { email, password } = req.body

  const hashPassword = await bcrypt.hash(password, 10)

  await pool.query(
    'INSERT INTO users (email, password) VALUES($1, $2) RETURNING *;',
    [email, hashPassword]
  )

  return res.status(200).send({ msg: 'Register success' })
}

export const fetchMe = (req: Request, res: Response) => {
  return res.send({ msg: 'Me' })
}
