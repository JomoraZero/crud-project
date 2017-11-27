const passport = require("passport");
// const FbStrategy = require("passport-facebook").Strategy;
// const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

const UserModel = require("../models/user-model");

// serialize (what user info do we save to the session?)
// gets called when a user logs in (on our POST /process-login)
passport.serializeUser((userFromDb, cb) => {
  cb(null, userFromDb._id);
});

// deserialize (how do we retrieve the user details from the sessions?)
// gets called EVERY TIME you visit the page while you are logged in
passport.deserializeUser((idFromSession, cb) => {
  UserModel.findById(idFromSession)
  .then((userFromDb) => {
    cb(null, userFromDb);
  })
  .catch((err) => {
    cb(err);
  });
});

// STRATEGIES (npm packages that enable additional methods of logging in)
// -----------------------------------------------------------------------

//login with facebook
// passport.use(
//   new FbStrategy(
//     //1st arg of FbStrategy -> settings object
//     {
//     clientID: "1749184255386329",
//     clientSecret: "3b092e157cc0364ef3652793f334b595",
//
//     //where to go after log in is successful (one of our routes)
//     callbackURL: "/facebook/success"
//   },
//   //2nd arg of FbStrategy -> callback
//   (accessToken, refreshToken, profile, callback) => {
//     //profile contains the user info we get from facebook
//     console.log("FACEBOOK profile -------------------------");
//     console.log(profile);
//
//     //check if there's already a document in the database for this user
//     UserModel.findOne({facebookID: profile.id})
//     .then((userFromDb) => {
//       if (userFromDb) {
//         callback(null, userFromDb);
//
//         return;
//       }
//
//       const theUser = new UserModel({
//         facebookID: profile.id,
//         fullName: profile.displayName
//       });
//
//       return theUser.save();
//     })
//     .then((newUser) => {
//       callback(null, newUser);
//     })
//     .catch((err) => {
//       callback(err);
//     });
//     //what happens when a user logs in with FB
//     //(create a new user document OR use an existing)
//
//   }
// )
// );
//
// //Login with Google
//
// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: '525551481249-jqub123viuta7jcfpefr20tq71ihsuhd.apps.googleusercontent.com',
//       clientSecret: 'bVuSG8o-lb0_wm4Z96MC1El8',
//
//       callbackURL: "/google/success",
//
//       proxy: true
//     },
//     (accessToken, refreshToken, profile, callback) => {
//       console.log("GOOGLE profile -------------------------");
//       console.log(profile);
//
//       UserModel.findOne({googleID: profile.id})
//       .then((userFromDb) => {
//         if (userFromDb) {
//           callback(null, userFromDb);
//
//           return;
//         }
//
//         const theUser = new UserModel({
//           googleID: profile.id,
//           fullName: profile.displayName
//         });
//
//         return theUser.save();
//       })
//       .then((newUser) => {
//         callback(null, newUser);
//       })
//       .catch((err) => {
//         callback(err);
//       });
//
//     }
//   )
// );
