import { Router } from 'express'
import {
  getAllCourses,
  getSingleCourse,
  createCourse,
  updateCourse,
  deleteCourse
} from '../controllers/courses.controller.js'
import authMiddleware from '../middleware/auth.middleware.js'
import adminMiddleware from '../middleware/admin.middleware.js'

const router = Router()

// public routes
router.get('/', getAllCourses)
router.get('/:id', getSingleCourse)

// admin only routes
router.post('/', authMiddleware, adminMiddleware, createCourse)
router.patch('/:id', authMiddleware, adminMiddleware, updateCourse)
router.delete('/:id', authMiddleware, adminMiddleware, deleteCourse)

export default router