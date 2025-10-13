import React from 'react'

const Signup = () => {
  return (
    <div>
      <h2>Signup Form</h2>
      <form >
        <div>
          <label>Name: </label>
          <input
            type="text"
            placeholder='name'
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
          <label>number: </label>
          <input
            type="number"
            placeholder='phone number'
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

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup