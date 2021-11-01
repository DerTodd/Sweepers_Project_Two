const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Chore extends Model {}

Chore.init(
  {
    chore_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    chore: {
      type: DataTypes.STRING
    },
    value: {
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.STRING
    },
    user_id: {
    type: DataTypes.INTEGER,
    references: {
      model:'chore',
      key: 'id',
    }  
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'chore'
  }
);

module.exports = Chore;
