import db from '../models/index.js'

export const getOne = (userId) => new Promise(async (resolve, reject) => {
  try {
    const response = await db.User.findOrCreate({
      where: { id : userId },
    });
    resolve({
      code: response ? 0 : 1,//[1] là xem tạo hay tìm thấy,[0] là data
      message: response ? 'Has found user' : 'User not found',
      user : response
    })
  } catch (error) {
    reject(error);
  }
});

