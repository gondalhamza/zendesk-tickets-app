import React, { useState, useEffect } from 'react';
import Ticket from '../models/Ticket';
import TicketService from '../services/TicketService';

const TicketList = ({ }) => {
  const backendBaseUrl = 'http://localhost:3001/api/tickets';

  const [tickets, setTickets] = useState([]);
  const ticketService = new TicketService();
  const [selectedTicket, setSelectedTicket] = useState(null);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const response = await ticketService.fetchTickets();
      const ticketData = response.map((ticket) => new Ticket(ticket));
      setTickets(ticketData);
    } catch (error) {
      console.error('Error fetching tickets:', error);
    }
  };

  const removeTicket = async (ticketId) => {
    try {
      await ticketService.removeFromCC(ticketId);
      fetchTickets(); 
    } catch (error) {
      console.error('Error removing from CC:', error);
    }
  };

  const showDetails = (ticket) => {
    setSelectedTicket(ticket);
  };

  const hideDetails = () => {
    setSelectedTicket(null);
  };

  return (
    <div className="ticket-list">
      <h1>Ticket List {tickets.length}</h1>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id} className="ticket">
            <h2>Ticket #{ticket.id}</h2>
            <p>Status: <span style={{ color: ticket.getStatusColor() }}>{ticket.status}</span></p>
            <button onClick={() => removeTicket(ticket.id)}>Remove from CC</button>
            <button onClick={() => showDetails(ticket)}>Show Details</button>
          </li>
        ))}
      </ul>

      {selectedTicket && (
        <div className="popup">
          <div className="popup-content">
            <h2>Ticket Details</h2>
            <pre>{JSON.stringify(selectedTicket, null, 2)}</pre>
            <button onClick={hideDetails}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TicketList;