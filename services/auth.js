import db from '../models/index.js'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


const hardPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(8));

export const register = ({ email, password }) => new Promise(async (resolve, reject) => {
  try {
    const response = await db.User.findOrCreate({
      where: { email },
      defaults: { email, password: hardPassword(password) }
    });
    console.log(response);
    const token = response[1] ? jwt.sign({ id: response[0].id, email: response[0].email, password: response[0].password , role_code: user.role_code },process.env.JWT_SECRET,{expiresIn: '2d'}) : null;
    resolve({
      code: response[1] ? 0 : 1,//[1] là xem tạo hay tìm thấy,[0] là data
      message: response[1] ? 'User registered successfully' : 'Email is already in use',
      access_token : `Bearer ${token}`,
    })
    console.log('User registered successfully');
  } catch (error) {
    reject(error);
  }
});
export const login = ({ email, password }) => new Promise(async (resolve, reject) => {
  try {
    const response = await db.User.findOne({
      where: { email },
      raw: true
    });
    const isChecked = response && bcrypt.compareSync(password, response.password);
    const token = isChecked ? jwt.sign({ id: response.id, email: response.email, role_code: response.role_code , password: response.password },process.env.JWT_SECRET,{expiresIn: '2d'}) : null;
    resolve({
      code: token? 0 : 1,
      message: token ? 'User login successfully' : response ? 'Password is incorrect' : 'Email does not exist',
      access_token : token ? token : null,
    })
    console.log('User login successfully');
  } catch (error) {
    reject(error);
  }
});
