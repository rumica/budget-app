import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import '../../style.css'

function IncomeExpenses() {

  const { transactions } = useContext(GlobalContext)

  const amounts = transactions.map(item => item.amount)

  const income = amounts
  .filter(item => item > 0)
  .reduce((acc, item) => (acc += item), 0)
  .toFixed(2)

  const expense = amounts
  .filter(item => item < 0)
  .reduce((acc, item) => (acc += item), 0) * -1
  .toFixed(2)

  return (
    <div className='income-expense-container'>
        <div className='incomes'>
            <h3>INCOME</h3>
            <p>${income}</p>
        </div>
        <div className='expenses'>
            <h3>EXPENSE</h3>
            <p>${expense}</p>
        </div>
    </div>
  )
}

export default IncomeExpenses