import passport from 'passport'

const authMiddleware = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user) => {
    if (err) return res.status(500).json({ error: 'Authentication error' })
    if (!user) return res.status(401).json({ error: 'Unauthorized - please login' })
    req.user = user
    next()
  })(req, res, next)
}

export default authMiddleware