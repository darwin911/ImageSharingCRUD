const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const SECRET = 'SECRET_PASS';

const hash = async (pass) => await bcrypt.hash(pass, 10);
const compare = async (pass, hashedPass) => await bcrypt.compare(pass, hashedPass);
const encode = async (data) => await jwt.sign(data, SECRET);
const verify = async (token) => await jwt.verify(token, SECRET);

module.exports = {
  hash,
  compare,
  encode,
  verify,
};