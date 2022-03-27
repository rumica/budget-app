import React, { useState, useEffect } from 'react'

function AddExpense({ expenses, setExpenses }) {

    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

  return (
   <div>
        <h2>Add new expense</h2>
        <form>
        <input 
        type="text"
        value={text}
        id="text"
        placeholder="Your title"
        onChange={(e) => setText(e.target.value)} />

        <input 
        type="number"
        value={amount}
        id="amount"
        placeholder="Your expense" 
        onChange={(e) => setAmount(e.target.value)} />

        <button>Add Expense</button>
    </form>
   </div>
  )
}

export default AddExpense