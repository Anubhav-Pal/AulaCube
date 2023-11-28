import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Todos from "./Todos";
import AddNewTodo from "./AddNewTodo";
import { useState, useEffect } from "react";


function App() {
    
    const [todoList, updateList] = useState(initTask);
    let initTask;
    // this code fetches the data in local storage and give it to the todoList using hooks
    if (localStorage.getItem('todoList') === null) {
        initTask = [""];
    }
    else {
        initTask = JSON.parse(localStorage.getItem('todoList'));
    }

    //function to add a new task
    const addTask = (title, desc, priority) => {
        if (todoList.length === 0) { var key = 1; }
        else {2
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
        console.log("I am onEdit.", noteItem);

        updateList(todoList.filter((e) => {
            return e !== noteItem;
        })
        )

        localStorage.setItem("todoList", JSON.stringify(todoList))
    }



    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(todoList))
    }, [todoList])

    return (
        <div>
            <Header title="AulaTask" />
            {/* Form for creating and editing tasks */} 
            <AddNewTodo addTask={addTask} />
            {/* List of all tasks with their priorities */}
            <Todos todoList={todoList} onDelete={onDelete} onEdit={handleTaskEdit} />
            <Footer />
        </div>
    );
}

export default App;