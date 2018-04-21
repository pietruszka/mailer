const User = (require('./../data/db').getConnection()).model('User');

const createUser = (req, res) => {
 let {
    name,
    email,
    password
  } = req.body;


  if (!name || !email || !password) {
    return res
      .status(500)
      .json({
        success: false,
        message: "Przekazano niepoprawne dane"
      })
  }

  const _newRegister = new User({
    name,
    email,
    password

  });

  _newRegister.save(result => {
    return res
      .status(200)
      .json({
        success: true,
        message: "Poprawnie dodano uzytkownika"
      })
  })

};

module.exports = {
  createUser
};
