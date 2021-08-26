import { CREATE_TODO, REMOVE_TODO, MARK_TODO_AS_COMPLETED, LOAD_TODO_FAILURE, LOAD_TODO_PROGRESS, LOAD_TODO_SUCCESS } from './actions';

const initialState = { isLoading: false, data: [] };

export const todos = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case CREATE_TODO:
            const { todo } = payload;
            return {
                ...state,
                data: state.data.concat(todo.todo)
            };

        case REMOVE_TODO:
            let { todo: todoRemoveTodo } = payload;
            return { ...state, data: state.data.filter(todo => todo.id !== todoRemoveTodo.id) };

        case MARK_TODO_AS_COMPLETED:
            let { todo: updatedTodo } = payload;
            return {
                ...state, data: state.data.map(todo => {
                    if (todo.id === updatedTodo.id) {
                        return updatedTodo;
                    }
                    return todo;
                })
            };

        case LOAD_TODO_SUCCESS:
            const { todos } = payload;
            return { ...state, isLoading: false, data: todos.todos };
        case LOAD_TODO_PROGRESS:
            return { ...state, isLoading: true };
        case LOAD_TODO_FAILURE:
            return { ...state, isLoading: false };

        default:
            return state;
    }
};