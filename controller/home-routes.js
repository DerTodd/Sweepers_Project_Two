const router = require('express').Router();
const { User, Chore } = require('../model');

//Get routes to display username by ID
// router.get('/:id', async (req, res) => {
//     try {
//       const userData = await User.findByPk(req.params.id, {
//           attributes: ['username'] 
//       })

//       const usersYo = "FredOne";
//       //userData.map((user) => user.get({ plain: true }));
//       res.render('homepage', { 
//       usersYo, 
//     });

//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });


//GET route to display all usernames of the members in db
router.get('/', async (req,res) => {
    try {
        const userData = await User.findAll({
            attributes: [
                'username'
              ],
        });
        //res.status(200).json(userData);

    // Serialize data so the template can read it
    const users = "Fred"
    //userData.map((user) => user.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
        users, 
    // logged_in: req.session.logged_in 
    });
    } catch (err) {
        res.status(500).json(err);
    }
})

//GET route to display all names of the chores in db
router.get('/chores', async (req,res) => {
    try {
        
        const choreData = await Chore.findAll({
            attributes: [
                'chore',
                'value',
                'description'
              ],
        });

       const choresData = choreData.map((data) =>
        data.get({ plain: true })
        );

    res.render('chores', { 
        choresData, 
    });
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
})

module.exports = router;
