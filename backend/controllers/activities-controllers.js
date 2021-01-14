const { Activity } = require('../models');

const selectAll = async (req, res, next) => {
  try {
    const activities = await Activity.findAll();
    res.status(200).json(activities);
  } catch (error) {
    let message = "Activities can't be shown";
    res.status(200).json(message);
  }
};

const  saveActivity =  async (req, res, next) => {
  const data = {... req.body};
    const activity = await Activity.create(data);
    try {
    await activity.save();
  } catch (error) {
    console.log(error);
    return next(new Error('Could not save activity.'));
  }
  res.json({ activity });
}

const selectOne = async (req, res, next) => {
  const { id } = req.params;
  try {
    const activity = await Activity.findByPk({ where: { id } });
    res.status(200).json(activity);
  } catch (error) {
    let message = `Activity ${id} can't be shown`;
    res.status(500).json(message);
  }
};

const deleteActivity = async (req, res, next) => {
  const { id } = req.params;
  try {
   const activity = await Activity.destroy({ where: { id } });
    res.status(200).json(`Activity ${id} was deleted !`);
  } catch (error) {
    let message = "Activity can't delete";
    res.status(500).json(message);
  }
}

const update = async (req, res, next) => {
  const data = { ...req.body };
  const { id } = req.params;
  try {
    await Activity.update(data, { where: { id } });
    res.status(200).json(`Data activity with id ${id} has been update`);
  } catch (error) {
    let message = "Activity can't be updated";
    res.status(500).json(message);
  }
};

module.exports = {
  deleteActivity,
  selectAll,
  selectOne,
  saveActivity,
  update
}

