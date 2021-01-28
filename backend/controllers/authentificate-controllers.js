const bcrypt = require('bcrypt');
const { User } = require('../models');
const jwt = require('jsonwebtoken');
const secret =
  '4oCY4oCcYWxn4oCdOuKAnEhTMjU2LOKAnHR5cOKAnTrigJxKV1TigJ194oCZIHwgb3BlbnNzbCBiYXNlNjQgLWUgLUEgCmVjaG8gLW4g4oCYe+KAnGFsZ+KAnTrigJxIUzI1NuKAmSDigJjigJx0eXDigJ064oCcSldU4oCd4oCZ';
console.log(secret);

const register = async (req, res, next) => {
  const { fullName, email, password, gender, birthdate } = req.body;
  const image =
    'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg';

  let newUser;
  try {
    const hashPassword = await bcrypt.hash(password, 10);
    newUser = await User.create({ fullName, email, gender, image, birthdate, password: hashPassword });
  } catch (error) {
    return next(new Error('Could not save User.'));
  }

  console.log('User signed up!');
  res.json({ user: newUser, access: true });
};

const authentificate = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(email);
  console.log(password);
  try {
    const user = await User.findOne({
      where: {
        email
      }
    });
    if (!user) {
      throw new Error('This user not exist');
    }
    const match = await bcrypt.compare(password, user.password);
    console.log(match);
    if (!match) {
      throw new Error('Password incorrect');
    }
    const payload = { user };
    const token = await jwt.sign(payload, secret, { expiresIn: '6h' });
    console.log(token);
    res.status(200).json({ token });
  } catch (err) {
    res.status(403).json(err.toString());
  }
};
const isAuthenticated = async (req, res, next) => {
  console.log('i am in auth');
  try {
    // recuperer le token HEADER
    // Verifier le token
    // add User to request
    // next()
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    console.log(token);
    if (!token) {
      throw new Error('no token found');
    }
    let { user } = jwt.verify(token, secret);
    console.log(user);
    req.user = { ...user };
    next();
  } catch (err) {
    res.status(403).json(err.toString());
  }
};

module.exports = {
  register,
  authentificate,
  isAuthenticated
};
