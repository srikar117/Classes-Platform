import Course from '../models/Course.js'

export const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find()
    res.status(200).json(courses)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const getSingleCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id)
    if (!course) return res.status(404).json({ error: 'Course not found' })
    res.status(200).json(course)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const createCourse = async (req, res) => {
  try {
    const { title, description, price, thumbnail_url } = req.body
    const course = await Course.create({ title, description, price, thumbnail_url })
    res.status(201).json(course)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const updateCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    if (!course) return res.status(404).json({ error: 'Course not found' })
    res.status(200).json(course)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id)
    if (!course) return res.status(404).json({ error: 'Course not found' })
    res.status(200).json({ message: 'Course deleted successfully!' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}