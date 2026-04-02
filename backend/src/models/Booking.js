import mongoose from 'mongoose'

const bookingSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  course_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  slot_time: { type: Date, required: true },
  batch_name: { type: String }
}, { timestamps: true })

export default mongoose.model('Booking', bookingSchema)