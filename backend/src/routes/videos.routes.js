import { Router } from 'express'
import {
  getCourseVideos,
  addVideo,
  deleteVideo
} from '../controllers/videos.controller.js'
import authMiddleware from '../middleware/auth.middleware.js'
import adminMiddleware from '../middleware/admin.middleware.js'

const router = Router()

// student route - checks payment inside controller
router.get('/:courseId', authMiddleware, getCourseVideos)

// admin routes
router.post('/', authMiddleware, adminMiddleware, addVideo)
router.delete('/:id', authMiddleware, adminMiddleware, deleteVideo)

export default router