const express = require('express');
const router = express.Router();

// Mock payment processing
router.post('/process', async (req, res) => {
  return res.json({ success:true, transactionId: `TXN${Date.now()}` });
});

router.post('/verify', async (req, res) => {
  return res.json({ success:true, status: 'verified' });
});

module.exports = router;
