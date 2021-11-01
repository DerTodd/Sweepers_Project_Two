const router = require('express').Router();
const { User } = require('../../model');


// GET route that checkes for all user data in the db
router.get('/', async (req,res) => {
    try {
        const userData = await User.findAll();
    //   req.session.save(() => {
    //   req.session.user_id = userData.id;
    //   req.session.logged_in = true;

    //   res.status(200).json(userData);
    // });
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
})


// POST route for new users signup
router.post('/signup', async (req, res) => {
    try {
        const createUser = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
          });
        res.status(200).json(createUser)
    } catch (error) {
        res.status(500).json(err)
    }
  });
  

// POST route to login user
router.post('/login', async (req, res) => {
  try {
    const userLogin = await User.findOne({ where: { email: req.body.email } });

    if (!userLogin) {
      res.status(404).json({ message: 'Please try again. Invalid email or password.'});
      return;
    }

    // checks the password entered and compares the email address entered
    const validPassword = userLogin.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Please try again. Invalid email or password.'});
      return;
    } else {
        res.status(200).json({message: "You are now logged in!"})
    }

    // req.session.save(() => {
    //   req.session.user_id = userLogin.id;
    //   req.session.logged_in = true;
      
    //   res.json({ user: userLogin, message: 'You are now logged in!' });
    // });

  } catch (err) {
    res.status(400).json(err);
  }
});



// router.post('/logout', (req, res) => {
//   if (req.session.logged_in) {
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   } else {
//     res.status(404).end();
//   }
// });

module.exports = router;
