const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserChore extends Model { }

UserChore.init(
    {
       id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
       user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
<<<<<<< HEAD

            references: {
                model: 'user',
                key: 'id',
            },
=======
            references: {
                model: 'user',
                key: 'id',
            }
>>>>>>> 9c058ed0bae52bb92657f72c1f9456bbbe121c3a
        },
        assign_chore: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        chore_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'chore',
                key: 'id',
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'userChore'
    }
);

module.exports = UserChore;
