import React from 'react';
import '../../Main.css';

const Transactions = ({show}) => {
    console.log(show);
    console.log("Transactions");
    return (
        <div className={show ? 'transform' : 'full'}>
            Transactions
        </div>
    );
};

export default Transactions;