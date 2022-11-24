const { connection } = require('../../db');

exports.getAll = (callback) => {
  connection.query('select * from Products', callback);
}
