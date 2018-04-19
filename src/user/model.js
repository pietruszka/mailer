const mongoose = require('mongoose');

class UserModel {
    constructor(connection) {
        this.model = connection.model("User", this._userModel(), "User");
    }
    getModel() {
        return this.model;
    }

    _userModel() {
        return new mongoose.Schema({
            name: String,
            password: String,
            email: String,
            redirect: [mongoose.Schema.Types.ObjectId],
            apiKey: String,
        });
    }
}

module.exports = UserModel;