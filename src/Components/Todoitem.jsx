import React, { useState, useEffect } from 'react';

function Todoitem({ noteItem, onDelete, onEdit }) {
  const [isChecked, setChecked] = useState(() => {
    const storedValue = localStorage.getItem(`isChecked-${noteItem.key}`);
    return storedValue !== null ? JSON.parse(storedValue) : false;
  });

  let tag = "";

  if (noteItem.priority === "low") {
    tag = "text-bg-success";
  } else if (noteItem.priority === "medium") {
    tag = "text-bg-warning";
  } else if (noteItem.priority === "high") {
    tag = "text-bg-danger";
  }

  const handleRadioChange = () => {
    setChecked((prevChecked) => {
      const newChecked = !prevChecked;
      localStorage.setItem(`isChecked-${noteItem.key}`, JSON.stringify(newChecked));
      return newChecked;
    });
  };

  useEffect(() => {
    // Update local storage when component is unmounted
    return () => {
      localStorage.setItem(`isChecked-${noteItem.key}`, JSON.stringify(isChecked));
    };
  }, [isChecked, noteItem.key]);

  return (
    <div className={`card my-2 todo ${isChecked ? 'strikethrough' : ''}`}>
      <div className="card-header">
        <input
          type="checkbox" 
          checked={isChecked}
          onChange={handleRadioChange}
        />
        <h4 style={{ textDecoration: isChecked ? 'line-through' : 'none' }}>
          {noteItem.title}
        </h4>
      </div>
      <div className="card-body">
        <p>{noteItem.content}</p>
        <span className={`badge ${tag}`}>Priority: {noteItem.priority}</span>
        <br />
        <br />
        <button className="btn btn-sm btn-danger" onClick={() => onDelete(noteItem)}>Delete</button>
        <span> </span>
        <button className="btn btn-sm btn-secondary" onClick={() => onEdit(noteItem)}>Edit</button>
      </div>
    </div>
  );
}

export default Todoitem;
