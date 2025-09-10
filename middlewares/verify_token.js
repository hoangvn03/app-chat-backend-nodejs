import jwt from 'jsonwebtoken';
import { badRequest , notAuth } from '../middlewares/handle_errors.js';
const verifyToken = (req, res, next) => {
  const token = req.headers.authorizationhorization;
  if (!token) return badRequest('No token provided', res);
  const accessToken = token.split(' ')[1];
  jwt.verify(accessToken, process.env.JWT_SECRET, (err, user) => {
    if (err) return notAuth('Unauthorized', res);
    req.user = user;
    next();
  })
}
export default verifyToken;