const Ajv = require('ajv');
const addFormats = require('ajv-formats');

const authService = require('./authService');

const ajv = new Ajv();
addFormats(ajv);

exports.showRegistrationForm = (req, res) => {
  res.render('auth/register');
};

exports.register = async (req, res) => {
  const schema = {
    type: 'object',
    properties: {
      'full-name': { type: 'string', 'minLength': 1 },
      email: { type: 'string', format: 'email' },
      password: { type: 'string', 'minLength': 6 },
    },
    required: ['full-name', 'email', 'password'],
    additionalProperties: false,
  };
  // syntax validation
  if (!ajv.validate(schema, req.body)) {
    res.render('auth/register', { error: 'Invalid input!' });
    return;
  }
  const { 'full-name': fullName, email, password } = req.body;
  try {
    await authService.register(fullName, email, password);
  } catch (e) {
    res.render('auth/register', { error: e.message });
    return;
  }
  res.redirect('/');
};