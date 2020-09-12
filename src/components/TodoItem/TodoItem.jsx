import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
    const { todo } = props;
    return <div>{todo}</div>;
}

export default TodoItem;