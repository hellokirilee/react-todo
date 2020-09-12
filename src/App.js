import React from "react"
import TodoItem from "./components/TodoItem";

function App() {
  return (
  <div>
    <h1>My todo list ✔</h1>
    <TodoItem todo="Ride a dino 🐱‍🐉"/>
    <TodoItem todo="Do Some hacking 🐱‍💻"/>
    <TodoItem todo="Some cool stunts🐱‍🏍"/>

  </div>
  );
}

export default App;