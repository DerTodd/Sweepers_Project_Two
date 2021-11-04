<<<<<<< HEAD
const router = require("express").Router();
const { User, Chore } = require("../model");
=======
const router = require('express').Router();
const { User, Chore, UserChore } = require('../model');

>>>>>>> 9c058ed0bae52bb92657f72c1f9456bbbe121c3a

//Get routes to display username by ID
router.get("/user/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      attributes: ["username"],
    });
    console.log(userData);
    const usersYo = userData.get({ plain: true });
    console.log(usersYo);
    res.render("homepage", {
      usersYo,logged_in: req.session.loggedIn 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET route to display all usernames of the members in db
<<<<<<< HEAD

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: ["username"],
    });
    //res.status(200).json(userData);


=======
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
>>>>>>> 9c058ed0bae52bb92657f72c1f9456bbbe121c3a
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
<<<<<<< HEAD
    // Pass serialized data and session flag into template

    res.render('choresmain', { 
        users, choresData, 
    logged_in: req.session.logged_in 

=======
const letMeHaveIt = choresData.concat(users)
console.log(letMeHaveIt)
    // Pass serialized data and session flag into template
    res.render('homepage', { 
        users, choresData, letMeHaveIt
    // logged_in: req.session.logged_in 
>>>>>>> 9c058ed0bae52bb92657f72c1f9456bbbe121c3a
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET route to display all names of the chores in db
<<<<<<< HEAD

=======
// router.get('/chores', async (req,res) => {
//     try {
//         console.log("What up!");
//         const userData = await User.findAll({
          
//         });
//         console.log(userData)
//         //res.status(200).json(userData);
//     // Serialize data so the template can read it
//     const users = userData.map((user) => user.get({ plain: true }));
// console.log(users);
//         const choreData = await Chore.findAll({
//             attributes: [
//                 'id',
//                 'chore_name',
//                 'value',
//                 'description',
//                 'button'
//               ],
//         });
//         console.log(choreData);
//        const choresData = choreData.map((data) =>
//         data.get({ plain: true })
//         );
//         console.log(choresData);
//         const showMe = await User.findAll({
//             include: [{ model: Chore, through: UserChore }]
//         });
//         //console.log(showMe);
//         const showMeData = showMe.map((data) =>
//         data.get({ plain: true })
//         );
//         console.log(showMeData);
//     res.render('choresmain', { choresData, users, showMeData });
//     } catch (err) {
//         console.log(err)
//         res.status(500).json(err);
//     }
// })
// router.get('/userchores', async (req,res) => {
//     try {
//         const showMe = await User.findAll({
//             include: [{ model: Chore, through: UserChore }]
//         });
//         //console.log(showMe);
//         const showMeData = showMe.map((data) =>
//         data.get({ plain: true })
//         );
//         console.log(showMeData);
//     res.render('choresmain', { showMeData });
//     } catch (err) {
//         console.log(err)
//         res.status(500).json(err);
//     }
// })
>>>>>>> 9c058ed0bae52bb92657f72c1f9456bbbe121c3a

router.get('/chores', async (req,res) => {
    try {
        console.log("What up!");
        const userData = await User.findAll({
          include: { all: true, nested: true }});
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
        //console.log(choreData);
       const choresData = choreData.map((data) =>
        data.get({ plain: true })
        );
        //console.log(choresData);
        const showMe = await UserChore.findAll({
            //order:['user_id', ASC],
            include:  User,
            include: Chore,
            // attributes: {
            //     include: ['user_id']
            // },
            // include: {
            //     model: Chore,
            //     attributes:['chore_name']
            // }
        });
        //console.log(showMe);
        const showMeData = showMe.map((data) =>
        data.get({ plain: true })
        );
        //console.log(showMeData);
        //console.log(showMeData);
    res.render('choresmain', { choresData, users, showMeData });
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
})
<<<<<<< HEAD


=======
>>>>>>> 9c058ed0bae52bb92657f72c1f9456bbbe121c3a
module.exports = router;
