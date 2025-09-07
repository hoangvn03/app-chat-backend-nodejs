import user from "./user.js";
import auth from "./auth.js";
import { interalServerError } from "../middlewares/handle_errors.js";
const initRouter = (app) => {
    app.use('/api/v1/user', user);
    app.use('/api/v1/auth', auth);
    app.use('/', interalServerError);
};

export default initRouter;
