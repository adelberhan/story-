const router = require("express").Router();
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const Story = require('../models/Story')

// @desc   Login/Landing page
// @rout   Get /

router.get("/", ensureGuest, (req, res) => {
  res.render("login", { layout: "login" });
});

// @desc   dashboard
// @rout   Get / dashboard

router.get("/dashboard", ensureAuth, async (req, res) => {
  try {
    const stories = await Story.find({ user: req.user.id }).lean()
    res.render("dashboard", {
      name: req.user.displayNme,
      stories
    })
  } catch (error) {
res.render('error/500')
  }
  ;

});
module.exports = router;
