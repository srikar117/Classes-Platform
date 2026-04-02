import mongoose from 'mongoose'

const homeworkSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  course_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  file_url: { type: String, required: true },
  feedback: { type: String, default: '' }
}, { timestamps: true })

export default mongoose.model('Homework', homeworkSchema)