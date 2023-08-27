require('dotenv').config();
const axios = require('axios');

const BASE_URL = process.env.ZENDESK_BASE_URL;
const OAUTH_TOKEN = process.env.ZENDESK_OAUTH_TOKEN;

const zendeskService = {
  getTicketsWithCC: async (userId) => {
    try {
      const response = await axios.get(`${BASE_URL}/tickets.json?cc=${userId}`, {
        headers: {
          Authorization: `Bearer ${OAUTH_TOKEN}`,
        },
      });
      return response.data.tickets;
    } catch (error) {
      console.error(error);
      throw new Error('An error occurred while fetching tickets.');
    }
  },

  removeFromCCTicket: async (userId, ticketId) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/tickets/${ticketId}/remove_cc.json?user_id=${userId}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${OAUTH_TOKEN}`,
          },
        }
      );
      if (response.status !== 204) {
        throw new Error('Failed to remove user from CC list');
      }
    } catch (error) {
      throw error;
    }
  },
};

module.exports = zendeskService;
