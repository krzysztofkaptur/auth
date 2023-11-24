import { Router } from 'express'

import { loginService, registerService } from '../services/auth'

const router = Router()

router.post('/login', loginService)

router.post('/register', registerService)

export default router
