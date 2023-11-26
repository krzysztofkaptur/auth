import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import pool from '../config/db'

export const loginService = async (req: Request, res: Response) => {
  const { email, password } = req.body

  const result = await pool.query('SELECT * FROM users WHERE email=$1;', [
    email
  ])

  const user = result.rows[0]

  const isValidPassword = await bcrypt.compare(password, user.password)

  if (!isValidPassword) return res.status(401).send({ message: 'Unauthorized' })

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET!,
    {
      expiresIn: '1d'
    }
  )

  res.cookie('jwt', token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: true,
    maxAge: 3600000 * 24 // 24 hours
  })

  return res.send({ id: user.id, email: user.email })
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

export const fetchMe = async (req: Request, res: Response) => {
  const token = req.cookies.jwt

  if (!token) return res.status(401).send({ message: 'Unauthorized' })

  const isValidToken = jwt.verify(token, process.env.JWT_SECRET!)

  if (!isValidToken) return res.status(401).send({ message: 'Unauthorized' })

  const result = await pool.query('SELECT * FROM users WHERE email=$1;', [
    isValidToken.email
  ])

  const user = result.rows[0]

  return res.send({ id: user.id, email: user.email })
}
