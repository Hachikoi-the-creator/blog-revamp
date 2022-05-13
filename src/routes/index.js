const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'First Web Node' });
});

router.get('/donations', (req, res) => {
  res.render('post/donations', { title: 'Donations Page' });
});

// 2st Post
router.get('/hamburger-menu-ux', (req, res) => {
  res.render('post/hamburger-menu-ux', { title: 'first post' });
});

// 2nd post
router.get('/react-router6-template', (req, res) => {
  res.render('post/react-router6-template', { title: 'React Router 6' });
});

// 3rd post
router.get('/first-os-contribution-local', (req, res) => {
  res.render('post/first-os-contribution-local', { title: 'OS Tutorial local' });
});

// 4th post
router.get('/first-os-contribution-online', (req, res) => {
  res.render('post/first-os-contribution-online', { title: 'OS Tutorial online' });
});


// router.get('/contact', (req, res) => {
//   res.render('post/contact', { title: 'Contact Page' });
// });
// router.get('/about', (req, res) => {
//   res.render('post/about', { title: 'About Page' });
// });

module.exports = router;
