import React from 'react'
import { connect } from 'react-redux';
import { removeTodo, completeTodo } from './actions';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';

const TodoList = ({ todos, onRemovePressed, onCompletePressed }) => {
    return (
        <div className="list-wrapper">
            <NewTodoForm />
            {todos.map(todo => <TodoListItem todo={todo} key={todo.id} onRemovePressed={onRemovePressed} onCompletePressed={onCompletePressed} />)}
        </div>
    );
}
const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: id => dispatch(removeTodo(id)),
    onCompletePressed: id => dispatch(completeTodo(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);