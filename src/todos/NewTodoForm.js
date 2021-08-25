import React, { useState } from 'react'
import './NewTodoForm.css';
const NewTodoForm = () => {
    const [inputValue, setInputValue] = useState('');
    return (
        <div className="new-todo-form">
            <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Type your new todo here" className="new-todo-input" />
            <button className="new-todo-button">Create Todo</button>
        </div>
    );
}

export default NewTodoForm;
