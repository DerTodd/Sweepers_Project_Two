const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Chore extends Model {}

Chore.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    chore_name: {
      type: DataTypes.STRING
    },
    value: {
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.STRING
    },
    button: {
      type: DataTypes.STRING
    }
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
