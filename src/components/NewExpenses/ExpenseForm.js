import { useState } from "react";
import "./ExpenseForm.css";
// import Expenses from "../Expenses/Expenses";

const ExpenseForm = (props) => {
  const [enteredTitle,setEnteredTitle] = useState("");
  const [enteredAmount,setEnteredAmount] = useState("");
  const [enteredDate,setEnteredDate] = useState("");

  const titleChangHandler = (e) =>{
    setEnteredTitle(e.target.value)
  }
  const amountChangHandler = (e) =>{
    setEnteredAmount(e.target.value)
  }
  const DateChangHandler = (e) =>{
    setEnteredDate(new Date(e.target.value ))
    console.log(e.target.value)
  }
  const submitHundler = (event) => {
    event.preventDefault();
    
    const expenseData = {
      title : enteredTitle,
      amount : enteredAmount,
      date : enteredDate,
    }
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHundler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={ amountChangHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={DateChangHandler}/>
        </div>
        <div className="new-expense__action">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
