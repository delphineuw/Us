const { User } = require('../models');

// CRUD Users: 

const selectAll = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    let message = "Users can't be shown";
    res.status(200).json(message);
  }
};

const  saveUser =  async (req, res, next) => {
  const data = {...req.body}
  console.log(data)
    const user = await User.create(data);
    try {
    await user.save();
  } catch (error) {
    console.log(error);
    return next(new Error('Could not save User.'));
  }
  res.json({ user });
}

const selectOne = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    res.status(200).json(user);
  } catch (error) {
    let message = `User ${id} can't be shown`;
    res.status(500).json(message);
  }
};

const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  try {
   const user = await User.destroy({ where: { id } });
    res.status(200).json(`User with id : ${id} was deleted !`);
  } catch (error) {
    let message = "User can't Delete";
    res.status(500).json(message);
  }
}

const update = async (req, res, next) => {
  const data = { ...req.body };
  const { id } = req.params;
  try {
    await User.update(data, { where: { id } });
    res.status(200).json(`Data user with id ${id} has been update`);
  } catch (error) {
    let message = "User can't be updated";
    res.status(500).json(message);
  }
};

module.exports = {
  deleteUser,
  selectAll,
  selectOne,
  saveUser,
  update,
}











