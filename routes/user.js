// const router = require("express").Router();

// router.get("/usertest", (req, res) => {
//   res.send("user test is successful");
// });

// lh:5000/api/user/usertest
// router.post("/userposttest", (req, res) => {
//   const username = req.body.username;
//   console.log(username);
//   res.send("your username is " + username);
// });

// module.exports = router;
// Run `npm audit` for details.
// PS C:\Users\ASELEMI DIVINE\Desktop\Projectos de InstincttHub\leadboard_ft> git branch Divine
//   Divine
//   remotes/origin/HEAD -> origin/main
//   remotes/origin/main
//   remotes/origin/settings
// PS C:\Users\ASELEMI DIVINE\Desktop\Projectos de InstincttHub\leadboard_ft> git checkout Divine
// Switched to branch 'Divine'
// * Divine
//   main
//   remotes/origin/main
//   remotes/origin/settings
// PS C:\Users\ASELEMI DIVINE\Desktop\Projectos de InstincttHub\leadboard_ft> git branch
// * Divine
//   main
// PS C:\Users\ASELEMI DIVINE\Desktop\Projectos de InstincttHub\leadboard_ft> npm start

const { verifyToken, verifyTokenAndAuthorization } = require("./verifyToken");

const router = require("express").Router();

// UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SECRET
    ).toString();
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
