import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem';

const TodoList = () => {
    const filteredTodos = useSelector((state) =>{
        const todos = state.todos;
        const filter = state.filter;
        const searchTerm = state.searchTerm

        return todos.filter((todo) =>{
            const matchsFilter = (filter === "COMPLETED" && todo.completed) || (filter === "INCOMPLETE" &&
            !todo.completed) || (filter === "ALL")

            const matchsSearch = todo.text.toLowerCase().includes(searchTerm);

            return matchsFilter && matchsSearch
        })
    })
  return (
    <ul>
        <li className="my-2 text-sm italic ">Notes Will Appear Here..😊</li>
        {
            filteredTodos.map((todo,index)=>(
                <TodoItem key={index} todo={todo} index={index}/>
               
            ) )
        }
    </ul>
  )
}

export default TodoList