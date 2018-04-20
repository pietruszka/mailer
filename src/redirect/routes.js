const {Router} = require('express')

const {
    createRedirect
} = require('./controller');

class RedirectRouter {
    constructor() {
        this.router = Router();
        this.router.post('/api/redirect', createRedirect);
    }

    getRouter() {
        return this.router;
    }
}

module.exports = new RedirectRouter();