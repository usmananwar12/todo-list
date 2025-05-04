import React from 'react';
import Todo from './todo.js';

const Todos = (props) => {
  return (
    <div className='container my-4'>
      <h3 className='my-3 text-center'>Todos List</h3>

      {props.todos.length === 0 ? (
        <p className="text-center text-muted fs-5">No todos to display</p>
      ) : (
        props.todos.map((todo) => {
          return (
            <div key={todo.sno} className="mb-3">
              <Todo todo={todo} onDelete={props.onDelete} />
            </div>
          );
        })
      )}
    </div>
  )
}

export default Todos;
