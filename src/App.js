import React , {useState} from "react"
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  //variables
  const [todos, setTodos] = useState([
    "Ride a dino 🐱‍🐉",
    "Do Some hacking 🐱‍💻",
    "Some cool stunts🐱‍🏍",
  ]);
  //methods - secret? alternative? something like that function - can google
  // this updates state to include above, plus newly added todo item
  const addTodo = (text) => {
    const newTodos = [...todos, text];
    setTodos(newTodos);
  };

  // index creates identifier - useful in the future
  return (
  <div>
    <h1>My todo list ✔</h1>
    {todos.map((todo, index) => (
      <TodoItem todo={todo} key={index} />
    ))}
    <TodoForm addTodo={addTodo} />
  </div>
  );
}

export default App;