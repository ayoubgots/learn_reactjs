import {useState} from 'react';
import NewExpense from "./components/NewExpenses/NewExpense"
import Expenses from "./components/Expenses/Expenses";

const DEFAULT_EXPENSE = [
  {id:1, title: "ayoub semlali", amount: 1000.00, date: new Date("05-25-2002")},
  {id:2, title: "ikram semlali", amount: 2000.00, date: new Date("05-25-2002")},
  {id:3, title: "ahmed omari", amount: 2000.00, date: new Date("05-25-2002")},
  {id:4, title: "amine semlali", amount: 4000.00, date: new Date("05-25-2002")}
];

const App = () =>{
  const [expenses,updateExpenses] = useState(DEFAULT_EXPENSE);

  const addExpenseDataHandler = expense =>{
      updateExpenses(prevExpense =>{
        return [expense,...prevExpense];
      })
  }
  return (
    <div>
    <NewExpense onAddExpenseData={addExpenseDataHandler}/>
    <Expenses item = {expenses}/>   
    </div>
  );
}

export default App;
