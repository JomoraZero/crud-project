const mongoose = require("mongoose");

mongoose.Promise = Promise;

mongoose.connect(process.env.DATABASE_URL, {useMongoClient: true})
  .then(() => {
    console.log("Mongoose SUCCESS");
  })
  .catch((err) => {
    console.log("Mongoose FAILED");
    console.log(err);
  });
