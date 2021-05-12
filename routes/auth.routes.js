const express = require('express');
const passport = require('passport');
const router = express.Router();
const User = require('../models/User.model');
const { isLoggedOut, isLoggedIn } = require('../middlewares/auth');
const bcrypt = require('bcryptjs');
const uploader = require('../configs/cloudinary.config');
const bcryptSalt = 10;

router.post('/signup', isLoggedOut,  (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  if (password.length < 6) {
    return res.status(400).json({
      message: 'Please make your password at least 6 characters long.',
    });
  }

  if (!email || !firstName || !lastName) {
    return res
      .status(400)
      .json({ message: 'Please fill all the filds in the form.' });
  }

  User.findOne({ email })
    .then((user) => {
      if (user) {
        return res
          .status(400)
          .json({ message: 'User already exists. Please change your email.' });
      }

      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);

      User.create({
        firstName,
        lastName,
        email,
        password: hashPass,
      })
        .then((newUser) => {
          req.login(newUser, (error) => {
            if (error) {
              return res.status(500).json(error);
            }
            return res.status(201).json(newUser);
          });
        })
        .catch((error) => res.status(500).json(error));
    })
    .catch((error) => res.status(500).json(error));
});

router.post('/login', isLoggedOut , (req, res, next) => {
  passport.authenticate('local', (error, theUser, failureDetails) => {
    if (error) {
      return res.status(500).json(error);
    }

    if (!theUser) {
      return res.status(401).json(failureDetails);
    }

    req.login(theUser, (error) => {
      if (error) {
        return res.status(500).json(error);
      }

      return res.status(200).json(theUser);
    });
  })(req, res, next);
});

router.post('/logout', isLoggedIn , (req, res, next) => {
  req.logout();
  return res.status(200).json({ message: 'Log out success!' });
});

router.put('/edit', isLoggedIn , uploader.single('profilePic'), (req, res, next) => {
  console.log(req.file);
  User.findOneAndUpdate(
    { _id: req.user.id },
    { ...req.body, profilePic: req.file ? req.file.path : req.user.profilePic },
    { new: true }
  )
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(500).json(error));
});

router.get('/loggedin', (req, res, next) => {
  if(req.isAuthenticated()){
    return res.status(200).json(req.user);
  } else {
    return res.status(403).json({ message: 'Forbbiden' });
  }
});

module.exports = router;