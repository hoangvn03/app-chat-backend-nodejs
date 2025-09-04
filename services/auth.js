import db from '../models'

export const register = () => new Promise((resolve, reject) => {
  try {
    resolve({
      status_code: 200,
      message: "User registered successfully!",
    });
    console.log('User registered successfully');
  } catch (error) {
    reject(error);
  }
});
