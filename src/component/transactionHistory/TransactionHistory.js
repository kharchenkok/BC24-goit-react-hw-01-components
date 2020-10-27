import React from 'react';
import UserTransaction from './UserTransaction';

const TransactionHistory = ({items}) => {
    // console.log(items);
    return (
        <table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
      
        <tbody>
          {items.map(item =><UserTransaction key={item.id} items={item}/>)}         
        </tbody>
      </table>
    );
};

export default TransactionHistory;