const router = require('express').Router();
const userRoutes = require('./api/user-routes');

router.use('/user', userRoutes);

module.exports = router;
