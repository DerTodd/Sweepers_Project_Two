const router = require('express').Router();
const { User, Chore } = require('../model');

//GET route to display all username of the members
router.get('/', async (req,res) => {
    try {
        const userData = await User.findAll({
            attributes: [
                'username'
              ],
        });
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
})

//GET route to display all names of the chores
router.get('/', async (req,res) => {
    try {
        const choreData = await Chore.findAll({
            attributes: [
                'chore',
                'value',
                'description'
              ],
        });
        res.status(200).json(choreData);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;