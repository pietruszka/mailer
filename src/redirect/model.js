const mongoose = require('mongoose');

class RedirectModel {
    constructor(connection) {
        this.model = connection.model("Redirect", this._redirectModel(), "Redirect");
    }
    getModel() {
        return this.model;
    }

    _redirectModel() {
        return new mongoose.Schema(
            {
                name: String,
                targetMail: String,
                mailAccount: [mongoose.Schema.Types.ObjectId]
            });
    }
}

module.exports = RedirectModel;