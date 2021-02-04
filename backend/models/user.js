'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Event, { foreignKey: 'host' });
      User.hasMany(models.Participant, { foreignKey: 'userId' });
      User.hasMany(models.User_Activity, { foreignKey: 'userId' });
    }
  }
  User.init(
    {
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
      image: DataTypes.STRING,
      password: DataTypes.STRING
      // birthday: DataTypes.DATE,
      // preference: DataTypes.JSON,
      // country: DataTypes.STRING,
      // city: DataTypes.STRING,
      // gender: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'User'
    }
  );
  return User;
};
