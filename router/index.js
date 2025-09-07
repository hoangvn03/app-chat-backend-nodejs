import user from "./user.js";
import auth from "./auth.js";

const initRouter = (app) => {
    app.use('/api/v1/user', user);
    app.use('/api/v1/auth', auth);

    app.use('/', (req, res) => {
        res.send('Welcome to the API');
    });
};

export default initRouter;
