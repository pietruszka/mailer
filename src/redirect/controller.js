const Redirect = (require('./../data/db').getConnection()).model('Redirect');

const createRedirect = (req, res) => {
    let {name, targetMail} = req.body;
    if(!name || !targetMail) {
        return res
            .status(500)
            .json({
                success: false,
                message: "Przekazano niepoprawne dane"
            })
    }

    const _redirect = new Redirect({
        name,
        targetMail
    });

    _redirect.save(result => {
        return res
            .status(200)
            .json({
                success: true,
                message: "Poprawnie dodano przekierowanie"
            })
    })
};

module.exports = {
    createRedirect
};