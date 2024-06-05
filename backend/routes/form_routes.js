import express from 'express'
import { create, fetch } from '../controllers/form_controller.js'

const router = express.Router()


router.post('/create-pdf',create)
router.get('/fetch-pdf',fetch)


export default router