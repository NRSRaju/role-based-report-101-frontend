import { useState } from 'react';
import axios from 'axios';
import './ShareReport.css';

const ShareReport = ({ reportId }) => {
    const [email, setEmail] = useState('');

    const handleShare = async () => {
        await axios.post('https://role-based-report-101.onrender.com/api/reports/share', { reportId, recipientEmail: email });
    };

    return (
        <div>
            <h2>Share Report</h2>
            <input
                type="email"
                placeholder="Recipient Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleShare}>Share</button>
        </div>
    );
};

export default ShareReport;
