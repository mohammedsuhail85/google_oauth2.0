const express = require('express')
const authRoute = require('./routes/auth-routes')
const profileRoute = require('./routes/profile-routes')
const passportSetup = require('./services/passpost-setup')
const app = express();
const cookieSession = require('cookie-session')
const passport = require('passport')

//Setup view engine
app.set('view engine', 'ejs')

//cookie management
app.use(cookieSession({
  maxAge: 24*60*60*1000,
  keys: ['w3sy5drutyftkvuyhbe65rtygf5ytv']
}));

//Initialize passport
app.use(passport.initialize())
app.use(passport.session())

//Route Homepage
app.get('/', (req, res) => {
  res.render('home');
})

//App Route
app.use('/auth', authRoute);
app.use('/profile', profileRoute);

app.listen(3000, () => {
  console.log("Server Listening on PORT 3000")
})