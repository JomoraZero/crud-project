const express = require('express');

const PostModel = require("../models/post-model.js");

const router = express.Router();

router.get("/posts/new", (req, res, next) => {
  if (req.user === undefined) {
    res.redirect("/login");
    return;
  }
  res.render("post-views/post-form");
});

router.post("/posts", (req, res, next) => {
  if (req.user === undefined) {
    res.redirect("/login");
    return;
  }

const thePost = new PostModel(
    {
      title: req.body.postTitle,
      photoUrl: req.body.postPhoto,
      description: req.body.postDescription,
      location: req.body.postLocation,
      time: req.body.postTime,
      contact: req.body.postContact,
      owner: req.user._id
    });

    thePost.save()
    .then(() => {
      res.redirect("/my-posts");
    })
    .catch((err) => {
      next(err);
    });
});


router.get("/my-posts", (req, res, next) => {

  if (req.user === undefined) {
    res.redirect("/login");
    return;
  }

  PostModel.find({owner: req.user._id})
  .sort({ createdAt: -1})
  .exec()
  .then((postResults) => {
    res.locals.listOfPosts = postResults;
    res.render("post-views/post-list");
  })
  .catch((err) => {
    next(err);
  });
});


module.exports = router;
