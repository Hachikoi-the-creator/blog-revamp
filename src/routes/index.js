const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'First Web Node' });
});

// 1st 
router.get('/donations', (req, res) => {
  res.render('post/donations', { title: 'Donations Page' });
});

// 2st 
router.get('/hamburger-menu-ux', (req, res) => {
  res.render('post/hamburger-menu-ux', { title: 'first post' });
});

// 2nd 
router.get('/react-router6-template', (req, res) => {
  res.render('post/react-router6-template', { title: 'React Router 6' });
});

// 3rd 
router.get('/first-os-contribution-local', (req, res) => {
  res.render('post/first-os-contribution-local', { title: 'OS Tutorial local' });
});

// 4th 
router.get('/first-os-contribution-online', (req, res) => {
  res.render('post/first-os-contribution-online', { title: 'OS Tutorial online' });
});


module.exports = router;
