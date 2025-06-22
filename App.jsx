import React from 'react';
import BirthdayCard from './components/BirthdayCard';
import './styles/main.css';

function App() {
  return (
    <div className="app">
      <h1>Happy Birthday!</h1>
      <BirthdayCard />
    </div>
  );
}

export default App;