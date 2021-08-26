import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import { loadTodos, removeTodoRequest, markTodoAsCompletedRequest } from './thunks';
import { getTodos, getTodosIsLoading, getCompletedTodos, getIncompleteTodos } from './selectors';
import './TodoList.css';

const TodoList = ({ completedTodos, inCompleteTodos, onRemovePressed, onCompletePressed, isLoading, startLoadingTodos }) => {
    useEffect(() => {
        startLoadingTodos()
    }, []);
    const isLoadingMessge = (<div>Loading Todos.......</div>);
    const content = (
        <div className="list-wrapper">
            <NewTodoForm />
            <h3>Incomplete:</h3>
            {inCompleteTodos.map(todo => <TodoListItem todo={todo} key={todo.id} onRemovePressed={onRemovePressed} onCompletePressed={onCompletePressed} />)}
            <br />
            <h3>Completed</h3>
            {completedTodos.map(todo => <TodoListItem todo={todo} key={todo.id} onCompletePressed={onRemovePressed} onCompletePressed={onCompletePressed} />)}
        </div>
    );
    return isLoading ? isLoadingMessge : content;
}
const mapStateToProps = state => ({
    isLoading: getTodosIsLoading(state),
    completedTodos: getCompletedTodos(state),
    inCompleteTodos: getIncompleteTodos(state),
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletePressed: id => dispatch(markTodoAsCompletedRequest(id)),
    startLoadingTodos: () => dispatch(loadTodos()),
});


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);