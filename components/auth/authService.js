const bcrypt = require('bcryptjs');

const authRepository = require('./authRepository');

exports.register = async (fullName, email, password) => {
  if (await authRepository.emailExists(email))
    throw new Error('Email exists!');
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return authRepository.insertUser(fullName, email, hash);
}