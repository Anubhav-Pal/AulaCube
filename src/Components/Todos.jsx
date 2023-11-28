import React from 'react'
import Todoitem from './Todoitem';

function Todos(props) {
    return (
        <div>
            <div className='container'>
                <h4 className=' my-4'>Todo list</h4>
                <div className='listContainer'>
                    {props.todoList.length === 0 ? "No items to display" :
                        props.todoList.map((todo) => {
                            return <Todoitem noteItem={todo} key={todo.key} onDelete={props.onDelete} onEdit={props.onEdit} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}


export default Todos;   