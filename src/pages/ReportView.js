// // src/pages/ReportView.js
// import React, { useState, useEffect, useContext } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { AuthContext } from '../contexts/AuthContext';
// import './ReportView.css';

// const ReportView = () => {
//   const [report, setReport] = useState(null);
//   const [shareEmail, setShareEmail] = useState('');
//   const { reportId } = useParams();
//   const { user } = useContext(AuthContext);

//   useEffect(() => {
//     const fetchReport = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get(`http://localhost:5000/api/reports/${reportId}`, {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//         setReport(response.data);
//       } catch (error) {
//         console.error('Error fetching report:', error);
//       }
//     };
//     fetchReport();
//   }, [reportId]);

//   const handleShare = async (e) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post('http://localhost:5000/api/reports/share', 
//         { reportId, recipientEmail: shareEmail },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       alert('Report shared successfully!');
//       setShareEmail('');
//     } catch (error) {
//       console.error('Error sharing report:', error);
//       alert('Failed to share report. Please try again.');
//     }
//   };

//   if (!report) return <div>Loading...</div>;

//   return (
//     <div className="report-view">
//       <h1>{report.title}</h1>
//       <p className="report-summary">{report.summary}</p>
//       <div className="report-content" dangerouslySetInnerHTML={{ __html: report.content }} />
      
//       {(user.role === 'Admin' || user.role === 'Editor') && (
//         <div className="share-report">
//           <h3>Share Report</h3>
//           <form onSubmit={handleShare}>
//             <input
//               type="email"
//               placeholder="Recipient's email"
//               value={shareEmail}
//               onChange={(e) => setShareEmail(e.target.value)}
//               required
//             />
//             <button type="submit">Share</button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ReportView;
// pages/ReportView.js
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';
import './ReportView.css';

const ReportView = () => {
  const [report, setReport] = useState(null);
  const [shareEmail, setShareEmail] = useState('');
  const { reportId } = useParams();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://localhost:5000/api/reports/${reportId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setReport(response.data);
      } catch (error) {
        console.error('Error fetching report:', error);
      }
    };
    fetchReport();
  }, [reportId]);

  const handleShare = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('https://role-based-report-101.onrender.com/api/reports/share',
        { reportId, recipientEmail: shareEmail },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Report shared successfully!');
      setShareEmail('');
    } catch (error) {
      console.error('Error sharing report:', error);
      alert('Failed to share report. Please try again.');
    }
  };

  if (!report) return <div>Loading...</div>;

  return (
    <div className="report-view">
      <h1>{report.title}</h1>
      <p className="report-summary">{report.summary}</p>
      <div className="report-content" dangerouslySetInnerHTML={{ __html: report.content }} />
      
      {(user.role === 'Admin' || user.role === 'Editor') && (
        <div className="share-report">
          <h3>Share Report</h3>
          <form onSubmit={handleShare}>
            <input
              type="email"
              placeholder="Recipient's email"
              value={shareEmail}
              onChange={(e) => setShareEmail(e.target.value)}
              required
            />
            <button type="submit">Share</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ReportView;