const sequelize = require('../config/connection');
const {
  User,
  Chore,
  UserChore
} = require('../model');

const userData = require('./userData.json');
const choreData = require('./choreData.json');
const userChoresData = require('./userChoresData.json');

const seedDatabase = async () => {
  await sequelize.sync({
    force: true
  });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Chore.bulkCreate(choreData);

  await UserChore.bulkCreate(userChoresData)

  process.exit(0);
};

seedDatabase();