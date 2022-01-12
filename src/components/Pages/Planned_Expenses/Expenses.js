import React from 'react';
import '../../Main.css';

const Expenses = ({show}) => {
    console.log("Expenses")
    return (
        <div className={show ? 'transform' : 'full'}>
            Expenses
        </div>
    );
};

export default Expenses;