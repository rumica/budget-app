import React, { useState, useEffect } from 'react'

function AddExpense({ expenses, setExpenses }) {

    const [form, setForm] = useState({title: '', price: ''})

    useEffect(() => {
        setForm({title: '', price: ''})
    }, [expenses])

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if(form.title === '' || form.price === '' ){
            return false
        }
        
        setExpenses((prev) => [...prev, form])
    }

    useEffect(() => {
        console.log(expenses)
    },[expenses])

  return (
    <form onSubmit={onSubmit}>
        <input 
        name="title" 
        value={form.title}
        placeholder="Your title" 
        onChange={onChangeInput}/>

        <input 
        name="price" 
        type="number"
        value={form.price}
        placeholder="Your expense" 
        onChange={onChangeInput}/>

        <button>Add Expense</button>
    </form>
  )
}

export default AddExpense