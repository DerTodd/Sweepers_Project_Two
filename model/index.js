const User = require('./User');
const Chore = require('./Chore');
const UserChore = require('./userChores');


User.hasMany(UserChore,{
    foreignKey:'user_id'
});

UserChore.belongsTo(User,{
    foreignKey: 'user_id'
})

Chore.belongsToMany(User,{
    through: {
        model: UserChore,
        unique: false
    },
});
User.belongsToMany(Chore,{
    through: {
        model: UserChore,
        unique: false
    },
});


module.exports = { User, Chore, UserChore };
