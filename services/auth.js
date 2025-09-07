import db from '../models/index.js'
import bcrypt from 'bcryptjs';

const hardPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(8));

export const register = ({ email, password }) => new Promise(async (resolve, reject) => {
  try {
    const response = await db.User.findOrCreate({
      where: { email },
      defaults: { email, password: hardPassword(password) }
    });
    console.log(response);
    resolve({
      error: response[1] ? 0 : 1,//[1] là xem tạo hay tìm thấy,[0] là data
      message: response[1] ? 'User registered successfully' : 'Email is already in use'
    })
    resolve({
      status_code: 200,
      message: "User registered successfully!",
    });
    console.log('User registered successfully');
  } catch (error) {
    reject(error);
  }
});
