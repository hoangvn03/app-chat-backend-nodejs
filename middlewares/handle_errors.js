import createError from 'http-errors';

export const badRequest = (err, res) => {
  const error = createError.BadRequest(err);
  return res.status(error.status).json({
    error : 404,
    message: error.message 
  });
}
export const interalServerError = (err, req, res, next) => {
  const error = createError.InternalServerError(err);
  return res.status(error.status).json({
    error: error.status,
    message: error.message 
  });
};
export const notFound = (req, res) => {
  const error = createError.NotFound('This route is not defined');
  return res.status(error.status).json({
    error : 400,
    message: error.message 
  });
}
export const notAuth = (err, res) => {
  const error = createError.Unauthorized(err);
  return res.status(error.status).json({
    error : 400,
    message: error.message 
  });
}