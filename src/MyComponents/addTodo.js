import React, { useState } from 'react';

const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be blank");
      return;
    }
    console.log("Todo added", title, desc);
    props.addTodo(title, desc);
    setTitle("");  // Clear input after add
    setDesc("");   // Clear input after add
  }

  return (
    <div className="container my-4 p-4 rounded shadow-sm bg-light">
      <h3 className="text-center mb-4">Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label fw-bold">Title</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            className="form-control" 
            id="InputTitle" 
            placeholder="Enter todo title" 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label fw-bold">Description</label>
          <input 
            type="text" 
            value={desc} 
            onChange={(e) => setDesc(e.target.value)} 
            className="form-control" 
            id="desc" 
            placeholder="Enter todo description" 
          />
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-success">
            ➕ Add Todo
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddTodo;
