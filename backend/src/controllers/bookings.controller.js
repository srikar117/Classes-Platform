import Booking from '../models/Booking.js'

export const createBooking = async (req, res) => {
  try {
    const { course_id, slot_time, batch_name } = req.body

    const booking = await Booking.create({
      user_id: req.user._id,
      course_id,
      slot_time,
      batch_name
    })

    res.status(201).json(booking)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user_id: req.user._id })
      .populate('course_id', 'title price')

    res.status(200).json(bookings)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate('user_id', 'full_name email')
      .populate('course_id', 'title price')

    res.status(200).json(bookings)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id)
    if (!booking) return res.status(404).json({ error: 'Booking not found' })
    res.status(200).json({ message: 'Booking cancelled successfully!' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}