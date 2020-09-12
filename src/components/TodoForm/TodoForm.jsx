import React, {useState} from "react";

function TodoForm(props) {
    // variables
    const {addTodo} = props;
    const [value, setValue] = useState ("");

    // methods
    //if blank do nothing - if there is ia value add it to the list using addTodo
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!value) {
            return;
        }

        addTodo(value);
        setValue("");
    };
    //template
    return (

        <form onSubmit={handleSubmit}>
        <input 
        vale = {value}
        type ="text" 
        placeholder="Add Todo..." 
        onChange={(event) => setValue(event.target.value)}
        />

    </form>
    );
}

export default TodoForm;