const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class UserController {
  static login (req, res) {
    User.find({
      username: req.body.username
    })
      .then(response => {
        bcrypt.compare(req.body.password, response[0].password)
        .then(result => {
          let payload = {
            id: result._id,
            username: result.username
          }
          let token = jwt.sign(payload, process.env.SECRET)
          res.status(200).json({
            token: token
          })
        })
        .catch(err => {
          console.log(err);
        })
      })
      .catch(err => {
        console.log(err);
      })
  }
  static register (req, res) {
    let newUser = new User ({
      username: req.body.username,
      password: req.body.password
    })
    newUser.save()
    .then(response => {
      res.status(200).json({
        msg: 'User succesfully created! Please log in'
      })
    })
    .catch(err => {
      console.log(err);
    })
  }
}
module.exports = UserController;