import { Router } from 'express'
import {
  createBooking,
  getMyBookings,
  getAllBookings,
  cancelBooking
} from '../controllers/bookings.controller.js'
import authMiddleware from '../middleware/auth.middleware.js'
import adminMiddleware from '../middleware/admin.middleware.js'

const router = Router()

// student routes
router.post('/', authMiddleware, createBooking)
router.get('/my', authMiddleware, getMyBookings)

// admin routes
router.get('/', authMiddleware, adminMiddleware, getAllBookings)
router.delete('/:id', authMiddleware, adminMiddleware, cancelBooking)

export default router