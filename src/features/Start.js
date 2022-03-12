import React from 'react'
import { Link } from 'react-router-dom';

function Start() {
  return (
    <div className="App flex items-center justify-center min-h-screen p-5 w-full bg-slate-800">
      <div className="flex justify-center align-center w-2/4 flex flex-col justify-center items-center">
        <img alt='' src="https://edufied.network/wp-content/uploads/2018/06/Ursadigital_Edufied_firmstyle_v3_client_black-bg-1-1.png" />
          <h1 className='my-5 text-white text-2xl'>Login/Sign up To continue</h1>
          <div className='my-5'>
            <Link className='p-5 mx-2 rounded-full bg-slate-400 shadow' to={'/login'}>Login</Link>
            <Link className='p-5 mx-2 rounded-full bg-slate-400 shadow' to={'/login'}>Sign Up</Link>
          </div>
      </div>
    </div>
  )
}

export default Start