const mongoose = require('mongoose');

class userRedirectModel {
    constructor(connection) {
        this.model = connection.model("User", this._userModel(), "User");
    }
    getModel() {
        return this.model;
    }

    _userModel() {
        return new mongoose.Schema(
            {
                redirect: [ObjectId]
            });
    }
}

module.exports = userRedirectModel;