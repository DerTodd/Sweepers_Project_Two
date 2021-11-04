const router = require('express').Router();
const { User, Chore, UserChore } = require('../model');

//Get routes to display username by ID
router.get('/user/:id', async (req, res) => {
    try {
      const userData = await User.findByPk(req.params.id, {
          attributes: ['username'] 
      })
      console.log(userData);
      const usersYo = userData.get({ plain: true });
      console.log(usersYo);
      res.render('homepage', { 
      usersYo, 
    });
    } catch (err) {
      res.status(500).json(err);
    }
  });


//GET route to display all usernames of the members in db
// router.get('/', async (req,res) => {
//     try {
//         const userData = await User.findAll({
//             attributes: [
//                 'username'
//               ],
//         });
//         //res.status(200).json(userData);

//     // Serialize data so the template can read it
//     const users = "Fred"
//     //userData.map((user) => user.get({ plain: true }));

//     // Pass serialized data and session flag into template
//     res.render('homepage', { 
//         users, 
//     // logged_in: req.session.logged_in 
//     });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// })

router.get('/', async (req,res) => {
    try {
        console.log("What up!");
        const userData = await User.findAll({
          
        });
        console.log(userData)
        //res.status(200).json(userData);
    // Serialize data so the template can read it
    const users = userData.map((user) => user.get({ plain: true }));
console.log(users);
const choreData = await Chore.findAll({
    attributes: [
        'chore_name',
        'value',
        'description'
      ],
});
console.log(choreData);
const choresData = choreData.map((data) =>
data.get({ plain: true })
);
console.log(choresData);
const letMeHaveIt = choresData.concat(users)
console.log(letMeHaveIt)
    // Pass serialized data and session flag into template
    res.render('homepage', { 
        users, choresData, letMeHaveIt
    // logged_in: req.session.logged_in 
    });
    } catch (err) {
        res.status(500).json(err);
    }
})

//GET route to display all names of the chores in db
router.get('/chores', async (req,res) => {
    try {
        console.log("What up!");
        const userData = await User.findAll({
          
        });
        console.log(userData)
        //res.status(200).json(userData);
    // Serialize data so the template can read it
    const users = userData.map((user) => user.get({ plain: true }));
console.log(users);
        const choreData = await Chore.findAll({
            attributes: [
                'id',
                'chore_name',
                'value',
                'description',
                'button'
              ],
        });
        console.log(choreData);
       const choresData = choreData.map((data) =>
        data.get({ plain: true })
        );
        console.log(choresData);
    res.render('choresmain', { choresData, users });
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
})
router.get('/userchores', async (req,res) => {
    try {
        const showMe = await User.findAll({
            include: [{ model: Chore, through: UserChore }]
        });
        //console.log(showMe);
        const showMeData = showMe.map((data) =>
        data.get({ plain: true })
        );
        console.log(showMeData);
    res.render('choresmain', { showMeData });
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
})


module.exports = router;
