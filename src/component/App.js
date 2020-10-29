import React from 'react';
import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendList from './friendList/FriendList';
import TransactionHistory from './transactionHistory/TransactionHistory';

import users from '../helpers/user.json';
import statisticalData from '../helpers/statistical-data.json';
import friends from '../helpers/friends.json'
import transactions from '../helpers/transactions.json'

const App = () => {

    return (
        <>
            <Profile items={users}/>
            <Statistics title="Upload stats" stats={statisticalData}/>
            <FriendList friends={friends}/>
            <TransactionHistory items={transactions}/>
        </>
    );
};

export default App;