import React from 'react';
import DashboardPanel from './DashboardPanel';
import TermsAndConditions from './TermsAndConditions';

import './portals-demo.css';

const App = () => {
    return (
        <>
            <h1>Dialog without portals (Dialog nested within child)</h1>
            <hr />
            <DashboardPanel/>
            <TermsAndConditions />
            <div id="dialog-portal"></div>
        </>
    );
}

export default App;