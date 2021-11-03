const router = require('express').Router();
const { Chore } = require('../../model');


// GET route that checks for all chore data in the db
router.get('/', async (req,res) => {
    try {
        const userData = await Chore.findAll();
  
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;
