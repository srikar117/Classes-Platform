import Video from '../models/Video.js'
import Payment from '../models/Payment.js'

export const getCourseVideos = async (req, res) => {
  try {
    // check if student has an approved payment for this course
    const payment = await Payment.findOne({
      user_id: req.user._id,
      course_id: req.params.courseId,
      status: 'approved'
    })

    if (!payment && req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Please purchase this course to access videos' })
    }

    const videos = await Video.find({ course_id: req.params.courseId })
    res.status(200).json(videos)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const addVideo = async (req, res) => {
  try {
    const { course_id, title, vimeo_url } = req.body

    const video = await Video.create({ course_id, title, vimeo_url })
    res.status(201).json(video)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const deleteVideo = async (req, res) => {
  try {
    const video = await Video.findByIdAndDelete(req.params.id)
    if (!video) return res.status(404).json({ error: 'Video not found' })
    res.status(200).json({ message: 'Video deleted successfully!' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}