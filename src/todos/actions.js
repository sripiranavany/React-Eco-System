export const CREATE_TODO = 'CREATE_TODO';
export const createTodo = text => ({
    type: CREATE_TODO,
    payload: { text },
});

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = id => ({
    type: REMOVE_TODO,
    payload: { id },
});

export const MARK_TODO_AS_COMPLETED = 'MARK_TODO_AS_COMPLETED';
export const completeTodo = completedId => ({
    type: MARK_TODO_AS_COMPLETED,
    payload: { completedId }
});