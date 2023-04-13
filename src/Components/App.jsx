import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Todos from "./Todos";
import AddNewTodo from "./AddNewTodo";
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

    //function to add a new task
    const addTask = (title, desc) => {
        if (todoList.length === 0) { var key = 1; }
        else {
            key = todoList[todoList.length - 1].key + 1;
        }
        const myTask = {
            key: key,
            title: title,
            content: desc
        }
        updateList([...todoList, myTask]);
    }


    //function to delete the task
    const onDelete = (noteItem) => {
        console.log("I am onDelete.", noteItem);

        // deleting this way in react does not work 
        // const index = todoList.indexOf(noteItem);
        // if (index !== -1) {
        // todoList.splice(index, 1);
        // }

        updateList(todoList.filter((e) => {
            return e !== noteItem;
        })
        )

        localStorage.setItem("todoList", JSON.stringify(todoList))
    }



    const [todoList, updateList] = useState(initTask);

    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(todoList))
    }, [todoList])


    // this is a functional component that is rendered same as an external component
    function masterComponent() {
        return (
            <div>
                <AddNewTodo addTask={addTask} />
                <Todos todoList={todoList} onDelete={onDelete} />
            </div>
        )
    }

    return (
        <div>
            <Header title="Listify" />
            <AddNewTodo addTask={addTask} />
            <Todos todoList={todoList} onDelete={onDelete} />
            <Footer />
        </div>
    );
}

export default App;