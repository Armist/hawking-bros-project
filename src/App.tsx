import {useToggle} from "./hooks/useToggle";

import './App.css'
import {useEffect, useState} from "react";
import axios from "axios";

type Todo = {
    id: number
    title: string
    userId: string
    completed: boolean
}

export const App = () => {
    const [isShown, setShown] = useState<boolean>(false)
    const [isVisible, toggleVisible] = useToggle(false)
    const [todos, setTodos] = useState<Todo[]>()
    const [todosVisible, toggleTodos] = useToggle(false)

    const fetchData = async () => {
        const {data} = await axios(
            "https://jsonplaceholder.typicode.com/todos"
        );
        setTodos(data);
    };

    useEffect(() => {
        fetchData();
    }, [setTodos]);

    const toggleShown = () => setShown(!isShown)

    return (
        <div className="App">
            <div className="block">
                <button className="block__button" onClick={toggleShown}>Click to show!(useState)</button>
                {
                    isShown && (
                        <p className="block__content">Hello with useState</p>
                    )
                }
            </div>

            <div className="block">
                <button className="block__button" onClick={toggleVisible}>Click to show!(custom Hook)</button>
                {
                    isVisible && (
                        <p className="block__content">Hello with Custom Hook</p>
                    )
                }
            </div>
            <div className="block">
                <button className="block__button" onClick={toggleTodos}>Click to show!(custom Hook)</button>
                {
                    todosVisible ? todos?.map(todo => (
                        <div className='block__item'>
                            {todo.title}
                        </div>
                    )) : ''
                }
            </div>
        </div>
    )
}