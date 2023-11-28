import React from 'react';
import { useState } from 'react';

function Todoitem({ noteItem, onDelete, onEdit }) {
  let tag = "";  // Declare the tag variable outside of the if block

  if (noteItem.priority === "low") {
    tag = "text-bg-success";
  }
  else if (noteItem.priority === "medium") {
    tag = "text-bg-warning";
  }
  else if (noteItem.priority === "high") {
    tag = "text-bg-danger";
  }


  return (
    <div className="card my-2 todo">
      <div className="card-header">
        <h4>{noteItem.title}</h4>
      </div>
      <div className="card-body">
        <p>{noteItem.content}</p>
        <span className={`badge ${tag}`}>Priority: {noteItem.priority}</span>
        <br />
        <br />
        <button className="btn btn-sm btn-danger" onClick={() => { onDelete(noteItem) }}>Delete</button>
        <span> </span>
        <button className="btn btn-sm btn-secondary" onClick={() => { onEdit(noteItem) }}>Edit</button>
      </div>
    </div>
  );
}

export default Todoitem;
