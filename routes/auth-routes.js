const router = require('express').Router();
const passport = require('passport')

//logout
router.get('/logout', (req, res) => {
  req.logOut();
  res.redirect('/')
})

//Auth Google
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email', 'https://www.googleapis.com/auth/drive.file']
}))

//Redirect func
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  // res.send(req.user)
  res.redirect('/profile/')
})

module.exports = router;