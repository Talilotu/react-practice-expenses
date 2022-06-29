import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/Expenses/NewExpenses";

function App() {
  return (
    <div className="App">
      <h1>My Expenses</h1>
      <NewExpenses />
      <Expenses />
    </div>
  );
}

export default App;
