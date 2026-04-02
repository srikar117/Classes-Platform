import mongoose from 'mongoose'

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  thumbnail_url: { type: String }
}, { timestamps: true })

export default mongoose.model('Course', courseSchema)