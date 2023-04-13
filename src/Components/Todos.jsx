import React from 'react'
import Todoitem from './Todoitem';

function Todos(props) {
    return (
        <div className='container'>
            <h4 className=' my-4'>Todo list</h4>
            {props.todoList.length === 0 ? "No items to display" :
                props.todoList.map((todo) => {
                    return <Todoitem noteItem={todo} key={todo.key} onDelete={props.onDelete} />
                })
            }
        </div>
    )
}


export default Todos;   