const passport = require("passport");
const router = require("express").Router();


// @desc   Auth With google
// @rout   Get /Auth/google

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

// @desc   google Auth callback
// @rout   Get / Auth/google/callback

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/dashboard');
  }
);

// @desc   LogOut
// @rout   /auth/logout
router.get('/logout',(req,res)=>{
    req.logOut()
    res.redirect('/')

 })

module.exports = router;
