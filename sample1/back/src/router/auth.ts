import { Router } from 'express'

import { loginService, registerService, fetchMe } from '../services/auth'

const router = Router()

router.post('/login', loginService)
router.post('/register', registerService)
router.get('/me', fetchMe)

export default router
