import "./Expenses.css";
import Card from "../UI/Card";
import ExpItem from "../Expenses/ExpenseItem";
const Expenses = (props) =>{
    return (
        <Card className="container">
      {props.item.map(expense => (
        <ExpItem key={expense.id} expense={expense} />
      ))}
        </Card>
    );
}

export default Expenses;
