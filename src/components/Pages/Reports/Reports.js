import React from 'react';
import '../../Main.css';

const Reports = ({show}) => {
    console.log("Reports")
    return (
        <div className={show ? 'transform' : 'full'}>
            Reports
        </div>
    );
};

export default Reports;