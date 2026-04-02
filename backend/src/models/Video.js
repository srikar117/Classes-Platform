import mongoose from 'mongoose'

const videoSchema = new mongoose.Schema({
  course_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  title: { type: String, required: true },
  vimeo_url: { type: String, required: true }
}, { timestamps: true })

export default mongoose.model('Video', videoSchema)