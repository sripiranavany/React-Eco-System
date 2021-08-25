import { CREATE_TODO, REMOVE_TODO, MARK_TODO_AS_COMPLETED } from './actions';

export const todos = (state = [], action) => {
    const { type, payload } = action;
    switch (type) {
        case CREATE_TODO:
            const { text } = payload;
            const newTodo = {
                id: (new Date()).getTime(),
                text,
                isCompleted: false
            };
            return state.concat(newTodo);

        case REMOVE_TODO:
            let { id } = payload;
            return state.filter(todo => todo.id !== id);

        case MARK_TODO_AS_COMPLETED:
            let { completedId } = payload;
            return state.map(todo => {
                if (todo.id === completedId) {
                    return { ...todo, isCompleted: true }
                }
                return todo;
            });

        default:
            return state;
    }
};