'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Activity.hasMany(models.User_Activity, { foreignKey: 'activityId' });
      Activity.hasMany(models.Event_Activity, { foreignKey: 'activityId' });
    }
  }
  Activity.init(
    {
      title: DataTypes.STRING,
      image: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Activity'
    }
  );
  return Activity;
};
