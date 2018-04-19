const {Router} = require('express')

class MailAccount {
    constructor() {
        this.router = Router();
    }

    getRouter() {
        return this.router;
    }
}

module.exports = new MailAccount();