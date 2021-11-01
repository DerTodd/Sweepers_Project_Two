const sequelize = require('../config/connection');
const { User, Chore } = require('../model');

const userData = require('./userData.json');
const choreData = require('./choreData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Chore.bulkCreate(choreData);
  
  process.exit(0);
};

seedDatabase();
