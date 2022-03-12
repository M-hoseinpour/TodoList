import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { ToggleDone, DeleteTodo } from '../../Redux/Todo/TodoSlice'
import EditTodo from './EditTodo';

function TodoItem({ todo }) {
   const [editShow, seteditShow] = useState(false)
   const dispatch = useDispatch();
  return (
    <div className='p-2 bg-gray-100  rounded'>
        <li className='p-2 bg-gray-100 flex justify-between items-center rounded'>
            <div>
                <input className='mr-2' type={'checkbox'} checked={todo.done} onChange={() => dispatch(ToggleDone({ id : todo.id, done : !todo.done }))}  />
                {todo.title}
            </div>
            <div>
                <button className='bg-blue-600 p-2 text-white rounded mx-1' onClick={() => seteditShow(true)}>Edit</button>
                <button className='bg-red-600 p-2 text-white rounded mx-1' onClick={() => dispatch(DeleteTodo({id : todo.id}))} >Delete</button>
            </div>
        </li>
        <p className='px-2'><span className='block text-gray-600 '>Description: </span>{todo.description}</p>
        <EditTodo show={editShow} setClose={seteditShow} todo={todo} /> 
    </div>
  )
}

export default TodoItem