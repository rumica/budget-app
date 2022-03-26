import React, { useState } from 'react'
import '../../style.css'

function List({ expenses, setExpenses }) {

    const [filteredExpenses, setFilteredExpenses] = useState([])

    const handleFilter = expenses.filter(item => {
        return Object.keys(item).some(key => {
          return item[key]
          .toString()
          .toLowerCase()
          .includes(filteredExpenses.toString().toLowerCase())
        })
      })

  return (
    <div className="main-list-container">
        <input 
        value={filteredExpenses}
        placeholder="Search your expenses"
        onChange={(e) => setFilteredExpenses(e.target.value)}
        />
        <div>
            <ul>
              {
                handleFilter.map((expense, i) => (
                 <div key={i}>
                    <div>
                      <li>{expense.title}</li>
                      <li >${expense.price}</li>
                    </div>
                  </div>             
                ))
              }
            </ul>
        </div>
      </div>
  )
}

export default List