import axios from "axios"
import { useEffect, useState } from "react";


interface TodoList{
    id: number;
    title: string;
}


const Fetching = () => {

    const [todo, setTodo] = useState<TodoList[]>([]);
    
    const FetchData = () => {
        axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((response) => setTodo(response.data) )
    }

    useEffect(() => {
      
    FetchData();
     
    }, [])


    const [list, setList] = useState<TodoList[]>([])

    const addTodo = (newItem: string) => {
        const newTodo: TodoList = {
            id:Math.random(),
            todo: newItem
        };
        setList([...list, newTodo])
    }
    

 const deleteTodo = (id: number) => {
    setTodo(todo.filter(item => item.id !== id))

 };



  return (
    <>
<h1 className="text-center">Fetching Todo List</h1>
    <button onClick={() => addTodo}>Add</button>

    <ul>
        {todo.map((TodoList) => (
            <li key={TodoList.id}>{TodoList.title}
            
            
            <button onClick={() => deleteTodo(TodoList.id)}>X</button>
            </li>
            
        ))}
    </ul>

    </>
  )
}

export default Fetching