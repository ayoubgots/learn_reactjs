import NewExpense from "./components/NewExpenses/NewExpense"
import Expenses from "./components/Expenses/Expenses";
const App = () =>{
  const expenses = [
    {id:1, title: "ayoub semlali", amount: 1000.00, date: new Date(2002, 5, 25)},
    {id:2, title: "ikram semlali", amount: 2000.00, date: new Date(2010, 4, 14)},
    {id:3, title: "ahmed omari", amount: 2000.00, date: new Date(2010, 4, 14)},
    {id:4, title: "amine semlali", amount: 4000.00, date: new Date(2004, 8, 6)}
  ]
  return (
    <div>
    <NewExpense/>
    <Expenses expenses = {expenses}/>   
    </div>
  );
}

export default App;
