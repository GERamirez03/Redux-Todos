import React from "react";
import { useSelector, useDispatch } from "react-redux";
import NewTodoForm from "./NewTodoForm";

function TodoList() {
    const todos = useSelector(store => store.todos);
    const dispatch = useDispatch();

    const remove = (targetId) => dispatch({ type: "DELETE", payload: targetId});

    return (
    <>
        <h1>To-do App</h1>
        <NewTodoForm />
        <div>
            <h2>To-do List</h2>
            <ul>
                {todos.map(todo => {
                    const { text, id } = todo;

                    return (
                    <li key={id}>
                        { text }
                        <button onClick={() => remove(id)}> X </button>
                    </li>
                    )
                })}
            </ul>
            
        </div>
    </>
    );
}

export default TodoList;