import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './App.css';

function App() {
  const [isLoggedin, setIsloggedin] = useState(false);

  return (
    <Router>
      <div className="App">

        <nav className="app-nav">
          <h1>Swiggy Clone</h1>
          {!isLoggedin ? (
            <>
              <div className='auth-details'>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
              </div>
            </>
          ) : (
            <>
              <Link to="/">Home</Link>
              <button
                onClick={() => {
                  setIsloggedin(false);
                }}
              >
                Logout
              </button>
            </>
          )}
        </nav>
      </div>
        <Routes>
          <Route
            path="/"
            element={isLoggedin ? <HomePage /> : <Login />}
          />
          <Route 
          path="/login"
          element={<Login setIsloggedin={setIsloggedin} />} 
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      
    </Router>
  );
}

export default App;