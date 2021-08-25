import React, { useState } from 'react';
import { addTodoRequest } from './thunks';
import { connect } from 'react-redux';
import './NewTodoForm.css';
const NewTodoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('');
    return (
        <div className="new-todo-form">
            <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Type your new todo here" className="new-todo-input" />
            <button className="new-todo-button" onClick={() => {
                const isDuplicateText = todos.some(todo => todo.text === inputValue);
                if (!isDuplicateText) {
                    onCreatePressed(inputValue);
                    setInputValue('');
                }
            }}>Create Todo</button>
        </div>
    );
}
const mapStateToProps = state => ({
    todos: state.todos
});
const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(addTodoRequest(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
