import {Router} from 'express'
import {ping} from '../Controllers/index.controller.js'

const router = Router()

router.get('/ping', ping);

export default router