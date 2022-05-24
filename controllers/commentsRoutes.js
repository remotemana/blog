const express = require("express");
const router = express.Router();
const {Comment} = require("../models/");

router.post("/", (req, res) => {
    if(!req.session.user){
      return res.status(401).json({msg:"ya gotta login to create a blog post!"})
  }
    Comment.create({
      title:req.body.title,
      commentBody:req.body.body,
      UserId:req.session.user.id
    })
      .then(newBlog => {
        res.json(newBlog);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });


module.exports = router;