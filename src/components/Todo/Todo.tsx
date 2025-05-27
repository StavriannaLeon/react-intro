//ToDo: create a function with useReducer

import {useReducer} from "react";
import TodoForm from "./TodoForm.tsx";
import TodoList from "./TodoList.tsx";

type TodoProps = {
    id: number
    text: string
}

type Action =
    | {type: "ADD"; payload: string}
    | {type: "DELETE"; payload: number}

const todoReducer = (state: TodoProps[], action: Action): TodoProps[] => {
    switch (action.type) {
        case "ADD":
            const newTodo: TodoProps = {
                id: Date.now(),
                text: action.payload
            }
            return [...state, newTodo]
            // ... : spread operator
            // state is an array of existing todos (TodoProps[]).
            // ...state spreads (or unpacks) all the elements of the state array into a new array.
            // newTodo is then added to the end of that new array. => Immutability
        case "DELETE":
            return state.filter(todo => todo.id !== action.payload)
        default:
            return state
    }
}

const Todo = () => {
    const [todos, dispatch] = useReducer(todoReducer, [])

    return (
        <>
            <div className="max-w-sm mx-auto p-6">
                <h1 className="text-center text-2xl mb-4">To-Do List</h1>
                <TodoForm dispatch={dispatch}/>
                <TodoList todos={todos} dispatch={dispatch}/>
            </div>
        </>
    )
}

export default Todo