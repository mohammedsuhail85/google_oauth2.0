const router = require('express').Router();

const authCheck =(req, res, next) => {
  if(!req.user){
    res.redirect('/');
  } else {
    next()
  }
}

router.get('/', authCheck, (req, res)=> {
  res.render('login', {user: req.user})
})

module.exports = router;