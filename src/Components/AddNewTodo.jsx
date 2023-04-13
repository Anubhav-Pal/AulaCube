import React, { useState } from 'react'

export default function AddNewTodo({ addTask }) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }
    const handleDescChange = (event) => {
        setDesc(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be empty.")
        }
        else {
            addTask(title, desc);
            setTitle("")
            setDesc("")
        }
    }

    return (
        <div className='container my-3'>
            <form className="row gy-2 gx-3 align-items-center" onSubmit={handleSubmit}>
                <h4 className='mx-2' >Add a task</h4>
                <div className="">
                    <label className="visually-hidden" htmlFor="title">Task Title</label>
                    <input type="text" value={title} onChange={handleTitleChange} className="form-control" id="title" placeholder="Enter task title" />
                    <br></br>
                    <label className="visually-hidden" htmlFor="desc">Task Description</label>
                    <input type="text" value={desc} onChange={handleDescChange} className="form-control" id="desc" placeholder="Enter task description" />
                </div>
                <div className="mt-4">
                    <button type="submit" className="btn btn-outline-success btn-sm ">Add Task</button>
                </div>
            </form>
        </div>
    )
}
