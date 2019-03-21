const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const SECRET = 'SECRET_PASS';

const hash = async (pass) => await bcrypt.hash(pass, 10);
const compare = async (pass, hashedPass) => await bcrypt.compare(pass, hashedPass);
const encode = async (data) => await jwt.sign(data, SECRET);
const verify = async (token) => await jwt.verify(token, SECRET);
const restrict = (req, res, next) => {
  try {
    console.log('restrict triggered')
    const token = req.headers.authorization.split(" ")[1];
    const data = jwt.verify(token, SECRET);
    res.locals.user = data; //do we need this line?
    next();
  } catch (e) {
    console.log(e);
    res.status(403).send('Unauthorized');
  }
}
const checkAccess = (req, res, next) => {
  try {
    console.log('checkAccess triggered');
    const token = req.headers.authorization.split(" ")[1];
    const data = jwt.verify(token, SECRET);
    if  ((parseInt(data.id) === parseInt(req.params.id)) || //some of these parseInts might not be necessary
        (parseInt(data.id) === parseInt(req.body.userId)) ||
        (parseInt(data.id) === parseInt(req.body.id))||
        (parseInt(data.id) === parseInt(req.params.userId))) {
      console.log('success')
      next();
    } else {
      console.log('fail')
      res.status(403);
    }
  } catch (e) {
    console.error(e);
    res.status(403);
  }
}

module.exports = {
  hash,
  compare,
  encode,
  verify,
  restrict,
  checkAccess
};
