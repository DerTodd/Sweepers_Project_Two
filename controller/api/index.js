const router = require('express').Router();
const userRoutes = require('./user-routes');
const choreRoutes = require('./chore-routes');
const userChoreRoutes = require('./userChore-routes')

router.use('/users', userRoutes);
router.use('/chores', choreRoutes);
router.use('/userChore', userChoreRoutes);

module.exports = router;
