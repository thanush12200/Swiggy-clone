import React from 'react'

const Login = () => {
  return (
    <div>
      <h2>Login Form</h2>
      <form >
        
        <div>
          <label>number: </label>
          <input
            type="number"
            placeholder='phone number'
            required = 'true'
          />
        </div>

        <div>
          <label>Email: </label>
          <input
            type="email"
            placeholder='email'
            required = 'true'
          />
        </div>

        <div>
          <label>Password: </label>
          <input
            type="password"
            placeholder='password'
            required='true'
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login