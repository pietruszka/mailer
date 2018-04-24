const User = (require('./../data/db').getConnection()).model('User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginUser = (req, res, next) => {
  let {
    email,
    password
  } = req.body;

    User.find({
        email
      })
      .exec()
      .then(user => {
        if (user.length < 1) {
          return res.status(404).json({
            message: "Auth failed"
          });
        }
        bcrypt.compare(password, user[0].password, (err, result) => {
          if (err) {
            return res.status(404).json({
              message: "Auth failed"
            });
          }
          if (result) {
            const token = jwt.sign({
                email: user[0].email,
              },
              'secret', {
                expiresIn: "1h"
              }
            );
            return res.status(200).json({
              message: "Auth successful",
              token: token
            });
          }
          res.status(404).json({
            message: "Auth failed"
          });
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  };

module.exports = {
  loginUser
};
