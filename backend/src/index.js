import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './lib/db.js'
import passport from './lib/passport.js'
import authRoutes from './routes/auth.routes.js'
import coursesRoutes from './routes/courses.routes.js'
import paymentsRoutes from './routes/payments.routes.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(passport.initialize())

app.use('/api/auth', authRoutes)
app.use('/api/courses', coursesRoutes)
app.use('/api/payments', paymentsRoutes)

app.get('/', (req, res) => {
  res.json({ message: 'Drawing classes API is running' })
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  connectDB()
})