import db from '../models/index.js'

export const getOne = (userId) => new Promise(async (resolve, reject) => {
  try {
    const response = await db.User.findOne({
      where: { id : userId },
      attributes: { exclude: ['password','createdAt','updatedAt'] },// truong hop muon loai tru password
      include: [{ model: db.Role, as: 'roleData', attributes: ['id','code', 'value'] }]//truong hop muon lay them role
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

