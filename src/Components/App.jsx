import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Todos from "./Todos";
import AddNewTodo from "./AddNewTodo";
import EditTodo from "./EditTodo";
import About from "./About";
import { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";


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

    const addTask = (title, desc, priority) => {
        let updatedList;
        if (editTask.key) {
            // If editTask has a key, it means we are editing an existing task
            updatedList = todoList.map((task) => (task.key === editTask.key ? { ...task, title, content: desc, priority } : task));
        } else {
            // If editTask doesn't have a key, it means we are adding a new task
            if (todoList.length === 0) {
                var key = 1;
            } else {
                key = todoList[todoList.length - 1].key + 1;
            }
            const newTask = {
                key: key,
                title: title,
                content: desc,
                priority: priority,
            };
            updatedList = [...todoList, newTask];
        }

        // Set the updated list
        updateList(updatedList);

        // Clear the editTask state
        setEditTask({});

        // Save the updated list to local storage
        localStorage.setItem("todoList", JSON.stringify(updatedList));
    };


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

    const MasterComponent = () => {
        return (
            <div>

                {/* Form for creating and editing tasks */}
                <div className="task-operation container">
                    <AddNewTodo addTask={addTask}    />
                    <EditTodo addTask={addTask} editedTask={editTask} />
                </div>

                {/* List of all tasks with their priorities */}
                <Todos todoList={todoList} onDelete={onDelete} onEdit={handleTaskEdit} />
            </div>
        )

    }

    return (
        <Router>
            <Header title="AulaTask" />

            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/" element={<MasterComponent />} />
            </Routes>

            <Footer />
        </Router>
    );
}

export default App;