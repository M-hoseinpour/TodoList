import React, { useState } from 'react'
import Modal from 'react-modal/lib/components/Modal'
import { useDispatch } from 'react-redux';
import { EditTodoList } from '../../Redux/Todo/TodoSlice';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

function EditTodo({ show, setClose, todo }) {
    const dispatch = useDispatch();
    const [title, setTitle] = useState(todo.title)
    const [description, setDescription] = useState(todo.description)

    const handleCreate = () => {
        dispatch(EditTodoList({ title: title, description: description, id : todo.id }));
        setClose(false)
    }

  return (
    <Modal
        isOpen={show}
        onRequestClose={() => setClose(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
    <div className=''>
        <label>Title:</label>
        <input className='p-2 border rounded w-full my-2 outline-none' value={title} onChange={(e) => setTitle(e.target.value)}/>
        <label>description:</label>
        <textarea className='w-full border rounded outline-none p-2' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

        <button
            aria-label="Increment value"
            onClick={() => handleCreate()}
            className='p-2 mx-2 rounded bg-green-600 mt-2 text-white'
            >
           Edit
          </button>
          <button
            aria-label="Increment value"
            onClick={() => setClose(false)}
            className='p-2 mx-2 rounded bg-red-600 mt-2 text-white'
            >
           Cancel
          </button>
        </div>
    </Modal>
  )
}

export default EditTodo