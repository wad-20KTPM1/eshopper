const db = require('../../db');
const { ITEM_PER_PAGE } = require('../../constant');

exports.getAll = async () => {
  const result = await db.connection.execute('select * from Products');
  return result[0];
};

exports.getProducts = async (page) => {
  const result = await db.connection.execute(`select * from Products limit ${ITEM_PER_PAGE} offset ${(page - 1) * ITEM_PER_PAGE}`);
  return result[0];
};

exports.count = async () => {
  const result = await db.connection.execute(`select count(*) from Products`);
  return result[0][0]['count(*)'];
}

exports.filter = async (name) => {
  const result = await db.connection.execute('select * from Products where name like ?', [`%${name}%`]);
  return result[0];
};

exports.get = async (id) => {
  const result = await db.connection.execute('select * from Products where id = ?', [id]);
  return result[0][0];
};
