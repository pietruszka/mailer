const Redirect = (require('./../data/db').getConnection()).model('Redirect');

const getUserRedirect = (req, res) => {
    let {_id} = req.body;
    if(!_id) {
        return res
            .status(500)
            .json({
                success: false,
                message: "Nie ma usera o takim id"
            })
    }

    const _userRedirect = new Redirect({
        _id
    });

    _userRedirect.save(result => {
        return res
            .status(200)
            .json({
                success: true,
                message: "Poprawnie pobrano wszytskie przekierowania"
            })
    })
};

module.exports = {
    getUserRedirect
};