const db = require('../../db');
exports.emailExists = async (email) => {
  const result = await db.connection.execute('select email from Users where email = ? limit 1', [email]);
  return result[0].length > 0;
};

exports.insertUser = async (fullName, email, password) => {
  await db.connection.execute('INSERT INTO `Users` (`email`,`password`,`name`) VALUES (?,?,?)', [email, password, fullName]);
};