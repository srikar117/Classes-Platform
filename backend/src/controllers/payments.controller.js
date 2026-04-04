import Payment from '../models/Payment.js'

export const submitPayment = async (req, res) => {
  try {
    const { course_id, screenshot_url } = req.body

    const payment = await Payment.create({
      user_id: req.user._id,
      course_id,
      screenshot_url,
      status: 'pending'
    })

    res.status(201).json(payment)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const getMyPayments = async (req, res) => {
  try {
    const payments = await Payment.find({ user_id: req.user._id })
      .populate('course_id', 'title price')

    res.status(200).json(payments)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find()
      .populate('user_id', 'full_name email')
      .populate('course_id', 'title price')

    res.status(200).json(payments)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const approvePayment = async (req, res) => {
  try {
    const payment = await Payment.findByIdAndUpdate(
      req.params.id,
      { status: 'approved' },
      { new: true }
    )

    if (!payment) return res.status(404).json({ error: 'Payment not found' })

    res.status(200).json({ message: 'Payment approved!', payment })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const rejectPayment = async (req, res) => {
  try {
    const payment = await Payment.findByIdAndUpdate(
      req.params.id,
      { status: 'rejected' },
      { new: true }
    )

    if (!payment) return res.status(404).json({ error: 'Payment not found' })

    res.status(200).json({ message: 'Payment rejected!', payment })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}