import express from 'express'
import { getLawyers, signup } from '../controllers/lawyer_controller.js'


const router = express.Router()

router.post('/signup', signup)
router.get('/',getLawyers)
export default router