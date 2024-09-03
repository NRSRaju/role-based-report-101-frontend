// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import { AuthProvider } from './contexts/AuthContext';
// // import Dashboard from './pages/Dashboard';
// // import ReportsPage from './pages/ReportsPage';
// // import Login from './components/Auth/Login';
// // import Register from './components/Auth/Register';
// // import './App.css';

// // function App() {
// //     return (
// //         <AuthProvider>
// //             <Router>
// //                 <Routes>
// //                     <Route path="/login" element={<Login />} />
// //                     <Route path="/register" element={<Register />} />
// //                     <Route path="/dashboard" element={<Dashboard />} />
// //                     <Route path="/reports/:reportId" element={<ReportsPage />} />
// //                 </Routes>
// //             </Router>
// //         </AuthProvider>
// //     );
// // }

// // export default App;
// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import { AuthProvider } from './contexts/AuthContext';
// import Dashboard from './pages/Dashboard';
// import ReportsPage from './pages/ReportsPage';
// import Login from './components/Auth/Login';
// import Register from './components/Auth/Register';
// import PrivateRoute from './components/PrivateRoute';
// import './App.css';

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
//           <Route path="/reports/:reportId" element={<PrivateRoute><ReportsPage /></PrivateRoute>} />
//           <Route path="/" element={<Navigate to="/dashboard" replace />} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Dashboard from './pages/Dashboard';
import ReportView from './pages/ReportView.js';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/reports/:reportId" element={<PrivateRoute><ReportView /></PrivateRoute>} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;