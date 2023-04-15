import "./ExpenseDate.css"
const ExpenseDate = (props) => {
  const ddate = props.d.toLocaleString("default", { month: "long" });
  const day = props.d.toLocaleString("default", { day: "2-digit" });
  const year = props.d.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{ddate}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;