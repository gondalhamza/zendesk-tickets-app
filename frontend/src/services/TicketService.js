require('dotenv').config();
const axios = require('axios');

const backendBaseUrl = process.env.REACT_APP_BACKEND_BASE_URL;

class TicketService {
  async fetchTickets() {
    try {
      const response = await axios.get(`${backendBaseUrl}/api/tickets`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async removeFromCC(ticketId) {
    try {
      const response = await axios.delete(`${backendBaseUrl}/api/tickets/${ticketId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default TicketService;