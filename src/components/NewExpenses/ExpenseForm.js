import "./ExpenseForm.css";



const ExpenseForm = () => {


  const setTitleChanged = (e) =>{
    console.log(e.target.value);
  }
  
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={setTitleChanged}/>
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01"/>
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type="date"/>
        </div>
        <div className="new-expense__action">
            <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
