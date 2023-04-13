import React from 'react'
import { useState } from 'react';

function Todoitem({ noteItem, onDelete }) {
    return (
        <div>  <section id="pricing">
            <div className="card-group">
                <div className="row">
                    <div className="my-2">
                        <div className="card">
                            <div className="card-header">
                                <h4>{noteItem.title}</h4>
                            </div>
                            <div className="card-body">
                                <p>{noteItem.content}</p>
                                <button className="btn btn-sm btn-danger" onClick={() => { onDelete(noteItem) }} >Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </section>
        </div>
    )
}

export default Todoitem;