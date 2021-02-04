const bcrypt = require('bcrypt');
const { User } = require('../models');
const jwt = require('jsonwebtoken');
const { AvatarGenerator } = require('random-avatar-generator');
const generator = new AvatarGenerator();
const secret =
  '4oCY4oCcYWxn4oCdOuKAnEhTMjU2LOKAnHR5cOKAnTrigJxKV1TigJ194oCZIHwgb3BlbnNzbCBiYXNlNjQgLWUgLUEgCmVjaG8gLW4g4oCYe+KAnGFsZ+KAnTrigJxIUzI1NuKAmSDigJjigJx0eXDigJ064oCcSldU4oCd4oCZ';
console.log(secret);

const register = async (req, res, next) => {
  const data = { ...req.body };
  let newuser;
  try {
    const hashPassword = await bcrypt.hash(data.password, 10);
    newuser = await User.create({ ...data, password: hashPassword });
  } catch (error) {
    console.log(error);
    return next(new Error('Could not save User.'));
  }
  res.json({ newuser });
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

const signup = async (req, res, next) => {
  const { email, password, fullName } = req.body;
  const defaultImage = generator.generateRandomAvatar();

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (error) {
    return next(new Error('[POST][USERS] Hashing password failed.'));
  }

  const data = {
    email,
    password: hashedPassword,
    fullName,
    image:
      'https://st3.depositphotos.com/13159112/17145/v/600/depositphotos_171453724-stock-illustration-default-avatar-profile-icon-grey.jpg'
  };

  console.log(data);

  let newUser;
  try {
    newUser = await User.create({ ...data });
  } catch (error) {
    console.log(error);
    return next(new Error('[POST][USERS] Could not sign user up.'));
  }

  console.log('[POST][USERS] User signed up!');
  res.json({
    message: 'New user signed up!',
    user: newUser,
    access: true
  });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let user;
  try {
    user = await User.findOne({ email });
  } catch (error) {
    return next(new Error('[POST][USERS] Could not log user in.'));
  }

  if (!user) {
    return next(new Error('[POST][USERS] Login failed (no corresponding email found).'));
  }

  let decodedPassword = false;
  try {
    decodedPassword = await bcrypt.compare(password, user.password);
  } catch (error) {
    return next(new Error('[POST][USERS] Login failed (password is wrong).'));
  }

  let token;
  try {
    token = await jwt.sign({ userId: user.id }, process.env.SECRET);
  } catch (error) {
    return next(new Error('[POST][USERS] Login failed (could not create token).'));
  }

  if (decodedPassword) {
    res.json({
      message: '[POST][USERS] User logged in!',
      token,
      user,
      access: true
    });
  } else {
    res.json({ message: '[POST][USERS] Wrong credentials, try again.', access: false });
  }
};

module.exports = {
  register,
  authentificate,
  isAuthenticated,
  signup,
  login
};
