import * as services from '../services/index.js';

export const register = async (req, res) => {
  try {
    const {email, password} = req.body;
    if (!email || !password) {
      return res.status(400).json({
        status_code: 400,
        message: "Email and password are required!"
      });
    }
    const response = await services.register(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      status_code: 500,
      message: "Registration failed!",
      error: error.message
    });
  }
};
export const login = async (req, res) => {
  try {
    const {email, password} = req.body;
    if (!email || !password) {
      return res.status(400).json({
        status_code: 400,
        message: "Email and password are required!"
      });
    }
    const response = await services.login(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      status_code: 500,
      message: "Login failed!",
      error: error.message
    });
  }
};