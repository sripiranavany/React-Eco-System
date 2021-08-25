import { CREATE_TODO, REMOVE_TODO, MARK_TODO_AS_COMPLETED, LOAD_TODO_FAILURE, LOAD_TODO_PROGRESS, LOAD_TODO_SUCCESS } from './actions';

export const isLoading = (state = false, action) => {
    const { type } = action;
    switch (type) {
        case LOAD_TODO_PROGRESS:
            return false;
        case LOAD_TODO_SUCCESS:
        case LOAD_TODO_FAILURE:
            return false;

        default:
            return state;
    }
};

export const todos = (state = [], action) => {
    const { type, payload } = action;
    switch (type) {
        case CREATE_TODO:
            const { todo } = payload;
            return state.concat(todo.todo);

        case REMOVE_TODO:
            let { todo: todoRemoveTodo } = payload;
            return state.filter(todo => todo.id !== todoRemoveTodo.id);

        case MARK_TODO_AS_COMPLETED:
            let { todo: updatedTodo } = payload;
            return state.map(todo => {
                if (todo.id === updatedTodo.id) {
                    return updatedTodo;
                }
                return todo;
            });

        case LOAD_TODO_SUCCESS:
            const { todos } = payload;
            return todos.todos;

        case LOAD_TODO_PROGRESS:
        case LOAD_TODO_FAILURE:

        default:
            return state;
    }
};