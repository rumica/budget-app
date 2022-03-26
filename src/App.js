import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Expenses from './components/Expenses/Expenses';

function App() {

  const [budget, setBudget] = useState(500)

  return (
    <div>
      <Header budget={budget} />
      <Expenses />
    </div>
  );
}

export default App;
