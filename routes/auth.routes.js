const express = require('express');
const passport = require('passport');
const router = express.Router();
const User = require('../models/User.model');
const bcrypt = require('bcryptjs');
const uploader = require('../configs/cloudinary.config');
const bcryptSalt = 10;

router.post('/signup', (req, res, next) => {
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
