import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";

function NewTodoForm() {

    const INITIAL_STATE = { text: "" };
    const [formData, setFormData] = useState(INITIAL_STATE);

    const dispatch = useDispatch();

    const createTodo = todoData => {
        const todo = { ...todoData, id: v4() }
        dispatch({ type: "CREATE", payload: todo });
    }

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        createTodo(formData);
        setFormData(INITIAL_STATE);
    };

    return (
        <div>
            <h2>Add a To-do</h2>
            <form onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="text">To-do:</label>
                    <input
                        id="text"
                        name="text"
                        type="text"
                        value={formData.text}
                        onChange={handleChange}
                        placeholder="Walk the dog..."
                    />
                </p>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default NewTodoForm;