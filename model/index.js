const User = require('./User');
const Chore = require('./Chore');
const UserChore = require('./UserChores');


User.hasMany(UserChore,{
    foreignKey:'user_id'
});

// UserChore.belongsTo(User,{
//     foreignKey:
// })

Chore.belongsTo(User,{
    through: UserChore,
    foreignKey: 'chore_id'
});



module.exports = { User, Chore, UserChore };
