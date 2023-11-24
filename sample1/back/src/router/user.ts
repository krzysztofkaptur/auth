import { Router } from 'express'

import { fetchMe } from '../services/user'

const router = Router()

router.get('/me', fetchMe)

export default router
