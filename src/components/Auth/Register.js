// import { useState } from 'react';
// import axios from 'axios';
// import './Register.css';

// const Register = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         await axios.post('http://localhost:5000/api/auth/register', { username, password });
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <h2>Register</h2>
//             <input
//                 type="text"
//                 placeholder="Username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//             />
//             <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//             />
//             <button type="submit">Register</button>
//         </form>
//     );
// };

// export default Register;
// import { useState } from 'react';
// import axios from 'axios';
// import './Auth.css'; // Combined CSS for Auth components
// import { Link, useNavigate } from 'react-router-dom';

// const Register = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post('http://localhost:5000/api/auth/register', { username, password });
//             alert('User registered successfully!');
//             navigate('/login'); // Redirect to login after successful registration
//         } catch (error) {
//             console.error('Error registering user:', error);
//             alert('Registration failed. Please try again.');
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit} className="auth-form">
//             <h2>Register</h2>
//             <input
//                 type="text"
//                 placeholder="Username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 required
//             />
//             <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//             />
//             <button type="submit" className="auth-button">Register</button>
//             <p className="auth-text">
//                 Already have an account? <Link to="/login" className="auth-link">Login</Link>
//             </p>
//         </form>
//     );
// };

// export default Register;


   // above is the correct code

// components/Auth/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import './Auth.css';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Viewer');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://role-based-report-101.onrender.com/api/auth/register', { username, password, role });
      alert('User registered successfully!');
      navigate('/login');
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <select value={role} onChange={(e) => setRole(e.target.value)} required>
        <option value="Viewer">Viewer</option>
        <option value="Editor">Editor</option>
        <option value="Admin">Admin</option>
      </select>
      <button type="submit" className="auth-button">Register</button>
      <p className="auth-text">
        Already have an account? <Link to="/login" className="auth-link">Login</Link>
      </p>
    </form>
  );
};

export default Register;