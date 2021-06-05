'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User_Activity.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'Users'
          },
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      activityId: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'Activities'
          },
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    },
    {
      sequelize,
      modelName: 'User_Activity'
    }
  );
  return User_Activity;
};
