import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    
    if (username === 'ezhil1312@gmail.com' && password === 'Pass@1312') {
      setIsLoggedIn(true);
      navigate('/');
    } else {
      alert('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="login-form">
      {!isLoggedIn ? (
        <div className="form-container">
          <h2>FoodiesHub</h2>
          <input
            type="text" className='mb-3'
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input className='mb-3'
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin} className='btn my-3'>Login</button>
        </div>
      ) : (
        <div className="welcome-container">
          <h2>Welcome, {username}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
