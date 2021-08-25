import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import { loadTodos, removeTodoRequest, markTodoAsCompletedRequest } from './thunks';
import './TodoList.css';

const TodoList = ({ todos, onRemovePressed, onCompletePressed, isLoading, startLoadingTodos }) => {
    useEffect(() => {
        startLoadingTodos()
    }, []);
    const isLoadingMessge = (<div>Loading Todos.......</div>);
    const content = (
        <div className="list-wrapper">
            <NewTodoForm />
            {todos.map(todo => <TodoListItem todo={todo} key={todo.id} onRemovePressed={onRemovePressed} onCompletePressed={onCompletePressed} />)}
        </div>
    );
    return isLoading ? isLoadingMessge : content;
}
const mapStateToProps = state => ({
    todos: state.todos,
    isLoading: state.isLoading
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletePressed: id => dispatch(markTodoAsCompletedRequest(id)),
    startLoadingTodos: () => dispatch(loadTodos()),
});


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);