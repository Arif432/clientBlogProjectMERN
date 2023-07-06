import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

export default function LoginPage() {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [redirect ,setRedirect] = useState(false)

async  function  loginFunc (ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      // body passed to backend req 
      body: JSON.stringify({username,password}),
      headers: {'Content-Type':'application/json'},
      credentials:'include'
    });

    if (response.status === 200) {
      setRedirect(true)
      alert('login successful');
    } else {
      console.log("resds",response.status);
      alert('log nfailed');
    }
  }

  if(redirect){
    return <Navigate to={'/'}/>
  }

  return (
    <form className='login' onSubmit={loginFunc}>
        <h1>Login</h1>
        <input type='text' placeholder='username'
        value={username}
        onChange={ev => setUsername(ev.target.value)}
        />
        <input type='password' placeholder='password'
        value={password}
        onChange={ev=>setPassword(ev.target.value)}
        />
        <button>login</button>
    </form>
  )
}
