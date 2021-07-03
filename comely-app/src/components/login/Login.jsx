import React, { useState } from 'react'
// import { Redirect } from 'react-router-dom'
import './login.css'
// import { data } from '../../data'
export default function Login() {
  const [name, setName] = useState('')
  const [pass, setPass] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && pass) {
      const person = { id: new Date().getTime().toString(), name, pass }
      console.log(person)
      setName('')
      setPass('')
    } else {
      alert('Empty Values')
    }
  }
  return (
    <div className='login'>
      <div className='login-title'>
        <h1>Login</h1>
      </div>
      <form type='submit' className='form' onSubmit={handleSubmit}>
        <div className='row'>
          <div className='input-field'>
            <label htmlFor='name'>Name :</label>
            <input
              type='text'
              id='name'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <label htmlFor='password'>Password :</label>
            <input
              type='password'
              id='password'
              name='password'
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
        </div>

        <div className='row'>
          <button type='submit' className='btn-grad'>
            Login
          </button>
        </div>
      </form>
    </div>
  )
}
