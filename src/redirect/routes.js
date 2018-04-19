const {Router} = require('express')

class RedirectRouter {
    constructor() {
        this.router = Router();
    }

    getRouter() {
        return this.router;
    }
}

module.exports = new RedirectRouter();