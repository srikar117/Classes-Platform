import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './lib/db.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Drawing classes API is running' })
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  connectDB()
})