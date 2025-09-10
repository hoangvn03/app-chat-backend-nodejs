import { badRequest , notAuth } from './handle_errors.js';

const isAdmin = (req, res, next) => {
  const { role_code } = req.user;
  if (role_code !== 'R1') return notAuth('Require Admin Role', res);
  next();
}
const isModeratorOrAdmin = (req, res, next) => {
  const { role_code } = req.user;
  console.log(role_code);
  if (role_code !== 'R1' && role_code !== 'R2') return notAuth('Require Moderator or Admin Role', res);
  next();
}
export  { isAdmin, isModeratorOrAdmin };