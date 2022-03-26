import React, { useState, useEffect } from 'react'
import AddExpense from './AddExpense'
import List from '../List/List'

function Expenses() {

    const [expenses, setExpenses] = useState([
        {
            title: 'Shopping',
            price: 140
        },
        {
            title: 'Food',
            price: 50
        },
    ])

  return (
    <div>
        <AddExpense expenses={expenses} setExpenses={setExpenses} />
        <List expenses={expenses} setExpenses={setExpenses} />
    </div>
  )
}

export default Expenses