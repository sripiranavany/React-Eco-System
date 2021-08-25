import React from 'react'
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';

const TodoList = ({ todos = [{ id: 1, text: "hello" }] }) => {
    return (
        <div className="list-wrapper">
            <NewTodoForm />
            {todos.map(todo => <TodoListItem todo={todo} key={todo.id} />)}
        </div>
    );
}

export default TodoList;