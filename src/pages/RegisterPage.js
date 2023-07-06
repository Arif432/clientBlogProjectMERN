import React, { useState } from 'react'

export default function RegisterPage() {

  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')

  // register post
  async function register(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:5000/register', {
      method: 'POST',
      body: JSON.stringify({username,password}),
      headers: {'Content-Type':'application/json'},
    });
    if (response.status === 200) {
      alert('registration successful');
    } else {
      alert('registration failed');
    }
  }
  
  return (
        <form className='register' onSubmit={register}>
            <h1>Register</h1>
            <input type='text' placeholder='username'
            value={username}
            onChange={(val)=>setUsername(val.target.value)}
            />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(val) => {
              setPassword(val.target.value);
              console.log(val.target.value);
            }}
          />

            <button>register</button>
        </form>
  )
}
