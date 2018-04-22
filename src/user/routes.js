const {Router} = require('express')

const {createUser}= require('./register');
const {loginUser}= require('./login');

class UserRouter {
    constructor() {
        this.router = Router();
        this.router.post('/auth/local/register' , createUser);
        this.router.post('/auth/local/login' , loginUser);
    }

    getRouter() {
        return this.router;
    }
}

module.exports = new UserRouter();
