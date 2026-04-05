import { Router } from 'express'
import {
  uploadHomework,
  getMyHomework,
  getAllHomework,
  addFeedback
} from '../controllers/homework.controller.js'
import authMiddleware from '../middleware/auth.middleware.js'
import adminMiddleware from '../middleware/admin.middleware.js'

const router = Router()

// student routes
router.post('/', authMiddleware, uploadHomework)
router.get('/my', authMiddleware, getMyHomework)

// admin routes
router.get('/', authMiddleware, adminMiddleware, getAllHomework)
router.patch('/:id/feedback', authMiddleware, adminMiddleware, addFeedback)

export default router