// Requiring our models and passport as we've configured it
var db = require('../models')
var passport = require('../config/passport')
var axios = require("axios")
module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post('/api/login', passport.authenticate('local'), function (req, res) {
    res.json(req.user)
  })

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post('/api/signup', function (req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function () {
        res.redirect(307, '/api/login')
      })
      .catch(function (err) {
        res.status(401).json(err)
      })
  })

  // Route for logging user out
  app.get('/logout', function (req, res) {
    req.logout()
    res.redirect('/')
  })

  // Route for getting some data about our user to be used client side
  app.get('/api/user_data', function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({})
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      })
    }
  })
  // route to get api from 
  app.post('/api/parks', function (req, res) {
    // infor from form
    var frontEndData = req.body
    var queryUrl = ''
    axios.get(queryUrl).then(function (data) {
      // retreive data
      res.json({
        parks: data
      })
    })
    // we need to call api with axios and pass some values from front end

  })


  app.get("/api/parks/:stateCode", function (req,res){
    var stateCode = req.params.stateCode

    axios.get("https://developer.nps.gov/api/v1/parks?stateCode="+stateCode+"&api_key=omVSWmotUaRLimR5vkKrFn1mk3BMf3xge5Xyyb7P").then(function(response){
      // console.log(response.data)
    console.log(response.data.total)
      res.json(response.data)
    })
  })

 
}


