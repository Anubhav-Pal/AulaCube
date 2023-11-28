import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Todos from "./Todos";
import AddNewTodo from "./AddNewTodo";
import EditTodo from "./EditTodo";
import { useState, useEffect } from "react";


function App() {
    
    let initTask;
    // this code fetches the data in local storage and give it to the todoList using hooks
    if (localStorage.getItem('todoList') === null) {
        initTask = [""];
    }
    else {
        initTask = JSON.parse(localStorage.getItem('todoList'));
    }
    const [todoList, updateList] = useState(initTask);
    const [editTask, setEditTask] = useState({})

    //function to add a new task
    const addTask = (title, desc, priority) => {
        if (todoList.length === 0) { var key = 1; }
        else {
            key = todoList[todoList.length - 1].key + 1;
        }
        const myTask = {
            key: key,
            title: title,
            content: desc,
            priority: priority
        }
        updateList([...todoList, myTask]);
    }


    //function to delete the task
    const onDelete = (noteItem) => {
        console.log("I am onDelete.", noteItem);

        updateList(todoList.filter((e) => {
            return e !== noteItem;
        })
        )

        localStorage.setItem("todoList", JSON.stringify(todoList))
    }


    //function to edit the task
    const handleTaskEdit = (noteItem) => {
        setEditTask(noteItem);
    }
    console.log(editTask);



    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(todoList))
    }, [todoList])

    return (
        <div>
            <Header title="AulaTask" />
            {/* Form for creating and editing tasks */} 
            <div className="task-operation container">

            <AddNewTodo addTask={addTask} title={editTask.title} desc={editTask.desc} priority={editTask.priority}  />
            <EditTodo addTask={addTask} editedTask={editTask}/>
            </div>
            {/* List of all tasks with their priorities */}
            <Todos todoList={todoList} onDelete={onDelete}  onEdit={handleTaskEdit}/>
            <Footer />
        </div>
    );
}

export default App;