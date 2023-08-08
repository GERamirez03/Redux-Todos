const INITIAL_STATE = { todos: [] };

function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "CREATE":
            return { ...state, todos: [ ...state.todos, action.payload ] };
        case "DELETE":
            return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
        default:
            return state;
    }
}

export default rootReducer;