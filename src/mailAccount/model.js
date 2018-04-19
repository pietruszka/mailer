const mongoose = require('mongoose');

class MailAccount {
    constructor(connection) {
        this.model = connection.model("MailAccount", this._mailAccountModel(), "MailAccount");
    }
    getModel() {
        return this.model;
    }

    _mailAccountModel() {
        return new mongoose.Schema(
            {
                name: String,
                smtp: String,
                username: String,
                password: String
            });
    }
}

module.exports = MailAccount;