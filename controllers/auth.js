import * as services from '../services';

export const register = async (req, res) => {
  try {
    const response = await services.register(req.body);
    return res.status(200).json(response);
  } catch (error) {
    console.error('Error during registration:', error);
    return res.status(500).json({
      status_code: 500,
      message: "Registration failed!",
      error: error.message
    });
  }
};