const router = require('express').Router();
const userRoutes = require('./user-routes');
const choreRoutes = require('./chore-routes');

router.use('/users', userRoutes);
router.use('/chores', choreRoutes);

module.exports = router;
