const { Event } = require('../models');

const selectAll = async (req, res, next) => {
  try {
    const events = await Event.findAll();
    res.status(200).json(events);
  } catch (error) {
    let message = "Events can't be shown";
    res.status(200).json(message);
  }
};

const saveEvent = async (req, res, next) => {
  const data = { ...req.body };
  const event = await Event.create(data);
  try {
    await event.save();
  } catch (error) {
    console.log(error);
    return next(new Error('Could not save Event.'));
  }
  res.json({ event });
};

const selectOne = async (req, res, next) => {
  const { id } = req.params;
  try {
    const event = await User.findByPk({ where: { id } });
    res.status(200).json(event);
  } catch (error) {
    let message = `Event ${id} can't be shown`;
    res.status(500).json(message);
  }
};

const deleteEvent = async (req, res, next) => {
  const { id } = req.params;
  try {
    const event = await Event.destroy({ where: { id } });
    res.status(200).json(`Event ${id} was deleted !`);
  } catch (error) {
    let message = "Event can't delete";
    res.status(500).json(message);
  }
};

const update = async (req, res, next) => {
  const data = { ...req.body };
  const { id } = req.params;
  try {
    await Event.update(data, { where: { id } });
    res.status(200).json(`Data event with id ${id} has been update`);
  } catch (error) {
    let message = "Event can't be updated";
    res.status(500).json(message);
  }
};

module.exports = {
  deleteEvent,
  selectAll,
  selectOne,
  saveEvent,
  update
};
