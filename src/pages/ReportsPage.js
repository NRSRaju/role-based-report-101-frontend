import ReportViewer from '../components/Reports/ReportViewer';
import ShareReport from '../components/Reports/ShareReport';
import './ReportsPage.css';

const ReportsPage = ({ reportId }) => {
    return (
        <div>
            <ReportViewer reportId={reportId} />
            <ShareReport reportId={reportId} />
        </div>
    );
};

export default ReportsPage;
