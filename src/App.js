import React , {useState} from "react"
import TodoItem from "./components/TodoItem";

function App() {
  //variables
  const [todos, setTodos] = useState([
    "Ride a dino 🐱‍🐉",
    "Do Some hacking 🐱‍💻",
    "Some cool stunts🐱‍🏍",
  ]);


  // index creates identifier - useful in the future
  return (
  <div>
    <h1>My todo list ✔</h1>
    {todos.map((todo, index) => (
      <TodoItem todo={todo} key={index} />
    ))}
  </div>
  );
}

export default App;