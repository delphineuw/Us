'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Event.hasMany(models.Participant, { foreignKey: 'eventId' });
      Event.hasMany(models.Event_Activity, { foreignKey: 'eventId' });
    }
  }
  Event.init(
    {
      host: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'users'
          },
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      title: DataTypes.STRING,
      category: DataTypes.STRING,
      description: DataTypes.STRING,
      location: DataTypes.STRING,
      date: DataTypes.STRING,
      time: DataTypes.STRING,
      isFinished: DataTypes.BOOLEAN,
      limited: DataTypes.BOOLEAN
    },
    {
      sequelize,
      modelName: 'Event'
    }
  );
  return Event;
};
