// import ReportList from '../components/Reports/ReportList';
// import './Dashboard.css';

// const Dashboard = () => {
//     return (
//         <div>
//             <h1>Dashboard</h1>
//             <ReportList />
//         </div>
//     );
// };

// export default Dashboard;
// src/pages/Dashboard.js
// import React, { useContext } from 'react';
// import ReportList from '../components/Reports/ReportList';
// import { AuthContext } from '../contexts/AuthContext';
// import './Dashboard.css';

// const Dashboard = () => {
//   const { user } = useContext(AuthContext);

//   return (
//     <div className="dashboard">
//       <header className="dashboard-header">
//         <h1>Dashboard</h1>
//         <p>Welcome, {user.username} ({user.role})</p>
//       </header>
//       <main className="dashboard-content">
//         <ReportList />
//       </main>
//     </div>
//   );
// };

// export default Dashboard;
// above is the correct 
// pages/Dashboard.js
import React, { useContext } from 'react';
import ReportList from '../components/Reports/ReportList';
import { AuthContext } from '../contexts/AuthContext';
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome, {user.username} ({user.role})</p>
      </header>
      <main className="dashboard-content">
        <ReportList />
      </main>
    </div>
  );
};

export default Dashboard;