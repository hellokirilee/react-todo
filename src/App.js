import React , {useState} from "react"
import TodoForm from "./components/TodoForm/TodoForm";
import TodoItem from "./components/TodoItem/TodoItem";
import "./App.css";

function App() {
  //variables
  const [todos, setTodos] = useState([
    { text: "Ride a dino 🐱‍🐉", isCompleted: false },
    { text: "Do Some hacking 🐱‍💻", isCompleted: false},
    { text: "Some cool stunts🐱‍🏍", isCompleted: false},
  ]);

  //methods - secret? alternative? something like that function - can google
  // this updates state to include above, plus newly added todo item
  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
// index is used here so it knows which item it's making the change to
  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };
  
  // index 
  //creates identifier - useful in the future
  return (
  <div className = "app">
    <div className = "todo-list">
    
    <h1>My todo list ✔</h1>
    {todos.map((todo, index) => (
      <TodoItem 
      todo={todo} 
      key={index}
      index={index}
      completeTodo={completeTodo}/>
    ))}

    <TodoForm addTodo={addTodo} />
  </div>
  </div>
  );
}

export default App;