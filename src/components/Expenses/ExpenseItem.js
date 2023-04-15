import { useState } from "react";
import "./ExpenseItem.css";

import ExpDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const {amount, date} = props.expense;
  const [title, setTitle] = useState(props.expense.title);

  const buttonClicked = () =>{
    setTitle('UPDATED !!!!');
  }
  return (
    <Card className="expense-item">
      <ExpDate d = {date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$ {amount}</div>
      </div>
      <button onClick={buttonClicked} >Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
