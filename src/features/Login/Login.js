import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { CreateAccount } from '../../Redux/Todo/TodoSlice';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(CreateAccount({ email : email, password : password }));
      navigate('/todo')
  }
  return (
    <div className="App flex items-center justify-center min-h-screen p-5 w-full bg-slate-800">
      <div className="flex justify-center border bg-gray-300 rounded align-center w-5/6 md:w-1/4 flex-col p-5 items-center">
          <img alt='' src='https://edufied.network/wp-content/uploads/2018/06/Ursadigital_Edufied_firmstyle_v3_client_black-bg-1-1.png' />
          <form className='w-full' onSubmit={(e) => handleSubmit(e)}>
            <div className='flex flex-col my-2 w-full'>
                <label>Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type={'email'} required className='outline-none p-2' />
            </div>
            <div className='flex flex-col my-2 w-full'>
                <label>Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type={'password'} required className='outline-none p-2' />
            </div>
            <button type='submit' className='p-2 w-full my-2 rounded bg-blue-500 shadow' >Log In/Sign up</button>
          </form>
        </div>
    </div>
  )
}

export default Login