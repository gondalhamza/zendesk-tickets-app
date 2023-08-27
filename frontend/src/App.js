import React, { useState, useEffect } from 'react';
import TicketList from './components/TicketList';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <TicketList />
    </div>
  );
};

export default App;