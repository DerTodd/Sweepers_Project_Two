const router = require(‘express’).Router();
const { User } = require(‘../model’);
router.get(‘/’, async(req,res) => {
    try {
        const userData = await User.findAll({
            include:[
                {
                    model:User,
                    attributes: [‘username’]
                }
            ]
        });
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    };
})