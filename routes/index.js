const express = require('express');
const PostModel = require("../models/post-model.js");
const router  = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  PostModel
    .find()
    .sort({createdAt: -1})
    .exec()
    .then((postResults) => {
      res.locals.listOfPosts = postResults;
      res.render("index");
    })
    .catch((err) => {
      next(err);
  });
});

module.exports = router;
