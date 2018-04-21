const {Router} = require('express')

const {createUser}= require('./register');

class UserRouter {
    constructor() {
        this.router = Router();
        this.router.post('/auth/local/register' , createUser);
    }

    getRouter() {
        return this.router;
    }
}

module.exports = new UserRouter();
