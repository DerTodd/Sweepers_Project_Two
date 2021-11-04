
const router = require("express").Router();
const { User, Chore, UserChore } = require("../model");


//Get routes to display username by ID
router.get("/user/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      attributes: ["username"],
    });
    
    const usersYo = userData.get({ plain: true });
    
    res.render("homepage", {
      usersYo,logged_in: req.session.loggedIn 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET route to display all usernames of the members in db

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: ["username"],
    });
    //res.status(200).json(userData);



    // Serialize data so the template can read it
    const users = userData.map((user) => user.get({ plain: true }));

const choreData = await Chore.findAll({
    attributes: [
        'chore_name',
        'value',
        'description'
      ],
});

const choresData = choreData.map((data) =>
data.get({ plain: true })
);

const letMeHaveIt = choresData.concat(users)

    // Pass serialized data and session flag into template

    res.render('homepage', { 
        users, choresData, letMeHaveIt
    // logged_in: req.session.logged_in 

    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET route to display all names of the chores in db

router.get('/chores', async (req,res) => {
    try {
        
        const userData = await User.findAll({
          include: { all: true, nested: true }});
        
        //res.status(200).json(userData);
    // Serialize data so the template can read it
    const users = userData.map((user) => user.get({ plain: true }));

        const choreData = await Chore.findAll({
            attributes: [
                'id',
                'chore_name',
                'value',
                'description',
                'button'
              ],
        });
        
       const choresData = choreData.map((data) =>
        data.get({ plain: true })
        );
        
        const showMe = await UserChore.findAll({
            
            include:  User,
            include: Chore,
           
        });
        
        const showMeData = showMe.map((data) =>
        data.get({ plain: true })
        );
        
    res.render('choresmain', { choresData, users, showMeData });
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
})

module.exports = router;
