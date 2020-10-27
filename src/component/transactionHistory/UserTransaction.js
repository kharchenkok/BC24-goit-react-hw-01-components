import React from 'react';

const UserTransaction = ({items}) => {
    // console.log(items);
    const{type,amount,currency}=items
    return (
        <tr>
            <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
          </tr>
    );
};

export default UserTransaction;