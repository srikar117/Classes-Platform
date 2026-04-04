import { Router } from 'express'
import {
  submitPayment,
  getMyPayments,
  getAllPayments,
  approvePayment,
  rejectPayment
} from '../controllers/payments.controller.js'
import authMiddleware from '../middleware/auth.middleware.js'
import adminMiddleware from '../middleware/admin.middleware.js'

const router = Router()

// student routes
router.post('/', authMiddleware, submitPayment)
router.get('/my', authMiddleware, getMyPayments)

// admin routes
router.get('/', authMiddleware, adminMiddleware, getAllPayments)
router.patch('/:id/approve', authMiddleware, adminMiddleware, approvePayment)
router.patch('/:id/reject', authMiddleware, adminMiddleware, rejectPayment)

export default router