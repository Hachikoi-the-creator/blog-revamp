const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'First Web Node' });
});

router.get('/contact', (req, res) => {
  res.render('post/contact', { title: 'Contact Page' });
});

router.get('/about', (req, res) => {
  res.render('post/about', { title: 'About Page' });
});

module.exports = router;
