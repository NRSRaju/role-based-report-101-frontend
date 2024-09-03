// // import { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import './ReportList.css';

// // const ReportList = () => {
// //     const [reports, setReports] = useState([]);

// //     useEffect(() => {
// //         const fetchReports = async () => {
// //             const response = await axios.get('http://localhost:5000/api/reports');
// //             setReports(response.data);
// //         };
// //         fetchReports();
// //     }, []);

// //     return (
// //         <div>
// //             <h2>Reports</h2>
// //             <ul>
// //                 {reports.map((report) => (
// //                     <li key={report._id}>{report.title}</li>
// //                 ))}
// //             </ul>
// //         </div>
// //     );
// // };

// // export default ReportList;
// // src/components/Reports/ReportList.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './ReportList.css';

// const ReportList = () => {
//   const [reports, setReports] = useState([]);

//   useEffect(() => {
//     const fetchReports = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get('http://localhost:5000/api/reports', {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//         setReports(response.data);
//       } catch (error) {
//         console.error('Error fetching reports:', error);
//       }
//     };
//     fetchReports();
//   }, []);

//   return (
//     <div className="report-list">
//       <h2>Reports</h2>
//       <ul>
//         {reports.map((report) => (
//           <li key={report._id} className="report-item">{report.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ReportList;
// src/components/Reports/ReportList.js
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../contexts/AuthContext';
import './ReportList.css';

const ReportList = () => {
  const [reports, setReports] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://role-based-report-101.onrender.com/api/reports', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setReports(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching reports:', error);
      }
    };
    fetchReports();
  }, []);

  return (
    <div className="report-list">
      <h2>Reports</h2>
      <div className="report-grid">
        {reports.map((report) => (
          <Link to={`/reports/${report._id}`} key={report._id} className="report-item">
            <h3>{report.title}</h3>
            <p>{report.summary}</p>
            {user.role === 'Admin' && <span className="admin-badge">Admin</span>}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ReportList;