import Homework from '../models/Homework.js'

export const uploadHomework = async (req, res) => {
  try {
    const { course_id, file_url } = req.body

    const homework = await Homework.create({
      user_id: req.user._id,
      course_id,
      file_url
    })

    res.status(201).json(homework)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const getMyHomework = async (req, res) => {
  try {
    const homework = await Homework.find({ user_id: req.user._id })
      .populate('course_id', 'title')

    res.status(200).json(homework)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const getAllHomework = async (req, res) => {
  try {
    const homework = await Homework.find()
      .populate('user_id', 'full_name email')
      .populate('course_id', 'title')

    res.status(200).json(homework)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const addFeedback = async (req, res) => {
  try {
    const { feedback } = req.body

    const homework = await Homework.findByIdAndUpdate(
      req.params.id,
      { feedback },
      { new: true }
    )

    if (!homework) return res.status(404).json({ error: 'Homework not found' })

    res.status(200).json({ message: 'Feedback added!', homework })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}