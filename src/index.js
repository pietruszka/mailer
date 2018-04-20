const express = require('express');

const config = require('./data/config');
const middleware = require('./middleware');
const userRouter = require('./user/routes');
const mailAccount = require('./mailAccount/routes');
const redirect = require('./redirect/routes');

class Application {
    constructor() {
        this.app = express();
        this.init();
    }

    init() {
        this.app.listen(config.PORT ,() => {
            console.log(`Server is running on port: ${config.PORT}`);
        });

        this.app.use(middleware.getRouter());
        this.app.use(userRouter.getRouter());
        this.app.use(mailAccount.getRouter());
        this.app.use(redirect.getRouter());
    }
}

module.exports = Application;