import ExpDate from "./ExpenseDate";
import "./ExpenseItem.css"


const ExpenseItem = (props) => {
  const {title,amount,date} = props.expense;
  return (
    <div className="expense-item">
      <ExpDate d = {date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
