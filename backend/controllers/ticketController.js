const express = require('express');
const router = express.Router();
const zendeskService = require('../services/zendeskService');

require('dotenv').config();

const userId = process.env.USER_ID;

// Get tickets where user is CC'd
router.get('/', async (req, res) => {
  try {
    const tickets = await zendeskService.getTicketsWithCC(userId);
    res.json(tickets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching tickets.' });
  }
});

// Remove user from CC list
router.delete('/:ticketId', async (req, res) => {
  try {
    const ticketId = req.params.ticketId;

    await zendeskService.removeFromCCTicket(userId, ticketId);
    res.json({ message: 'User removed from CC list.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while removing user from CC list.' });
  }
});

module.exports = router;
