const User = (require('./../data/db').getConnection()).model('User');
const bcrypt = require('bcrypt');


const createUser = (req, res, next) => {
  let {
    name,
    email,
    password
  } = req.body;

    User.find({
        email
      })
      .exec()
      .then(user => {
        if (user.length >= 1) {
          return res.status(409).json({
            message: "Mail exists"
          });
        } else {
          bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
              return res.status(500).json({
                error: err
              });
            } else {
              const user = new User({
                name,
                email,
                password: hash
              });
              user
                .save()
                .then(result => {
                  //  console.log(result);
                  res.status(201).json({
                    message: "User created"
                  });
                })
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                    error: err
                  });
                });
            }
          });
        }
      });
  };



module.exports = {
  createUser
};
