import React, { useState, useEffect } from 'react';
import AddExpense from './components/Expenses/AddExpense';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/Expenses/IncomeExpenses';
import List from './components/List/List';

import { GlobalProvider } from './context/GlobalState'


function App() {

  return (
    <GlobalProvider>
      <Header />
      <AddExpense />
      <Balance />
      <IncomeExpenses />
      <List />
    </GlobalProvider>
  );
}

export default App;
