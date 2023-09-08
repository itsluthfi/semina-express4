const express = require('express');
const router = express();
const {
  signup,
  activeParticipant,
  signin,
  getAllLandingPage,
  getDetailLandingPage,
  getDashboard,
  getAllPayments,
  checkout,
} = require('./controller');
const { authenticateParticipant } = require('../../../middlewares/auth');

router.post('/auth/signup', signup);
router.post('/auth/signin', signin);
router.put('/active', activeParticipant);
router.get('/events', getAllLandingPage);
router.get('/events/:id', getDetailLandingPage);
router.get('/orders', authenticateParticipant, getDashboard);
router.get('/payments/:id', authenticateParticipant, getAllPayments);
router.post('/checkout', authenticateParticipant, checkout);

module.exports = router;
