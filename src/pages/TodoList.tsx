import "./shared.css";
import { useState } from "react";
import { Todo, Todos } from "../types/types";
import RenderList from "./RenderList";

const TodoList = () => {

    const [todos, setTodos] = useState<Todos>([])
    const [todoVal, setTodoVal] = useState<string>()

    const addTask = () => {
        if (todoVal !== "") {
        // Check for an empty string instead of undefined
        const newTask: Todo = {
            task: String(todoVal),
            checked: false
        };
        const newTasks = [...todos, newTask];
        setTodos(newTasks);
        }
        setTodoVal(""); // Reset to an empty string
    };

    const flipCheck = (index: number) => {
        const updatedItems = [...todos];
        updatedItems[index].checked = !updatedItems[index].checked;
        setTodos(updatedItems);
    };

    const remTask = (index: number) => {
        const updatedItems = [...todos];
        updatedItems.splice(index, 1);
        setTodos(updatedItems);
    };

    return (
        <div className="main">
            <h1>Todo List</h1>
            <div className="content mt-4">
                <input type="text" value={todoVal} onChange={(e) => setTodoVal(e.target.value)}   
                    placeholder="Type & Press Enter"       
                    onKeyDown={(e) => {
                    if (e.code === "Enter") {
                    addTask();
                    }
                }} />
            </div>
            <div className="content mt-4">
                <RenderList todos={todos} flipCheck={flipCheck} remTask={remTask} />
            </div>
        </div>
    );
};

export default TodoList;
