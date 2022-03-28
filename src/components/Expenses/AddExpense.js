import React, { useState, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

function AddExpense({ expenses, setExpenses }) {

    const [text, setText] = useState('')
    const [amount, setAmount] = useState()

    const { addExpense } = useContext(GlobalContext)

    const onSubmit = (e) => {
      e.preventDefault()

      const newExpense = {
        id: Math.floor(Math.random() * 1000000000),
        text,
        amount: +amount
      }

      addExpense(newExpense)
    }

  return (
   <div className='form-container'>
        <h2>Add new expense or income. (+ for income / - for expense)</h2>
        <form onSubmit={onSubmit}>
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