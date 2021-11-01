// Import models 
const User = require('./User');
const Chore = require('./Chore');



Chore.belongsTo(User, {
    foreignKey: "user_id"
  }),

User.hasMany(Chore, {
    foreignKey: 'user_id',
    // onDelete: 'SET NULL',
  });

// onDelete - check also 'CASCADE'



module.exports = { User, Chore };


// // module.exports = {
//   User, Chore,
//   
//   
//   
// };

