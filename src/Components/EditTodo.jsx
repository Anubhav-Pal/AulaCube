import React, { useEffect, useState } from 'react'

export default function EditTodo({ addTask, editedTask }) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [priority, setPriority] = useState(null);

    useEffect(() => {
        if (editedTask) {
            setTitle(editedTask.title || "");
            setDesc(editedTask.content || "");
            setPriority(editedTask.priority || null);
        }
    }, [editedTask]);
    
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }
    const handleDescChange = (event) => {   
        setDesc(event.target.value);
    }
    const handlePriorityChange = (event) => {
        setPriority(event.target.value);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!title || !desc || !priority || priority === "Set priority level") {
            alert("Please fill out all fields, including priority.");
        } else {
            addTask(title, desc, priority);
            setTitle("");
            setDesc("");
            setPriority(null);
        }
    };
    return (
        <div className='container my-3'>
            <form className="row gy-2 gx-3 align-items-center" onSubmit={handleSubmit}>
                <h4 className='mx-2' >Update a task</h4>
                <div className="">
                    <label className="visually-hidden" htmlFor="title">Task name</label>
                    <input type="text" value={title} onChange={handleTitleChange} className="form-control" id="title" placeholder="Enter task title" />
                    <br></br>
                    <label className="visually-hidden" htmlFor="desc">Task description</label>
                    <input type="text" value={desc} onChange={handleDescChange} className="form-control" id="desc" placeholder="Enter task description" />
                    <br></br>
                    <select className="form-select" onChange={handlePriorityChange} value={priority}>
                        <option disabled selected value="null">Set priority level</option>
                        <option value="low">low</option>
                        <option value="medium">medium</option>
                        <option value="high">high</option>
                    </select>
                </div>
                <div className="mt-4">
                    <button type="submit" className="btn btn-outline-success btn-sm ">Update Task</button>
                </div>
            </form>
        </div>
    )
}
