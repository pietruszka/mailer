const {Router} = require('express')

const { getUserRedirect } = require('./controller');

class userRedirectRouter {
    constructor() {
        this.router = Router();
        this.router.get('/api/redirect/userId', getUserRedirect);
    }

    getRouter() {
        return this.router;
    }
}

module.exports = new userRedirectRouter();