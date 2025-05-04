import React from 'react'

const Todo = ({ todo, onDelete }) => {
  return (
    <div className='card shadow-sm mb-3'>
      <div className='card-body'>
        <h5 className='card-title'>{todo.title}</h5>
        <p className='card-text'>{todo.desc}</p>
        <button 
          className='btn btn-sm btn-danger' 
          onClick={() => { onDelete(todo) }}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default Todo;
