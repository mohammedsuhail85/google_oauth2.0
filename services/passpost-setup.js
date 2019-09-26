const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')

passport.serializeUser((user, done)=>{
  done(null, user)
})

passport.deserializeUser((user, done)=>{
  done(null, user)
})

passport.use(new GoogleStrategy({
  //Options for Google
  callbackURL: '/auth/google/redirect',
  clientID: '269795036962-ps04ahnh7il656vvqgvuqq2e1dm96t0u.apps.googleusercontent.com',
  clientSecret: 'deeKg_kdCLp0OOT-Vd_e2BgA'
}, (accessToken, refreshToken, profile, done) => {
  //Passport callback function
  console.log('Redirect callback func')
  console.log(profile)
  console.log(accessToken)
  console.log(refreshToken)
  let user = {
    profile: profile,
    accessToken: accessToken,
    refreshToken: refreshToken
  }
  done(null, user)
}))