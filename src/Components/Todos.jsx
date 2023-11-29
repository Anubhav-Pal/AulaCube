import React, { useState } from 'react';
import Todoitem from './Todoitem';

function Todos(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = props.todoList.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <div className='container'>
                <h4 className=' my-4'>Todo list</h4>
                <div className="pagination">
                    {Array.from({ length: Math.ceil(props.todoList.length / itemsPerPage) }, (_, index) => (
                        <button className='pagination-btn' key={index + 1} onClick={() => paginate(index + 1)}>
                           Page {index + 1}
                        </button>
                    ))}
                </div>
                <div className='listContainer'>
                    {currentItems.length === 0
                        ? "No items to display"
                        : currentItems.map((todo) => (
                            <Todoitem
                                noteItem={todo}
                                key={todo.key}
                                onDelete={props.onDelete}
                                onEdit={props.onEdit}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Todos;
