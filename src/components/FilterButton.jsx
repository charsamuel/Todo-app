import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterTodos, markAllCompleted } from '../redux/actions';

const FilterButton = () => {
    const dispatch = useDispatch();
    const currentFilter = useSelector((state) => state.filter)

    const handleFilter = (filter) =>{
        dispatch(filterTodos(filter))
    }
  return (
    <div className="text-sm flex space-x-8 items-center">
        <select 
        value={currentFilter}
        onChange={(e) => handleFilter(e.target.value) }
        
        className="px-2 py-1 rounded b">
            
            <option value="ALL">Default</option>
            <option value="COMPLETED">Completed</option>
            <option value="INCOMPLETE">Incomplete</option>
        </select>
        <button onClick={() => dispatch(markAllCompleted())} className=" text-sm px-2 py-1 bg-yellow-500 text-white ml-2 rounded">Mark All Completed</button>
    </div>
  )
}

export default FilterButton