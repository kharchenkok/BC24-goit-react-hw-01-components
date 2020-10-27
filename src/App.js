import React from 'react';
import Profile from './component/profile/Profile';
import Statistics from './component/statistics/Statistics';
import FriendList from './component/friendList/FriendList';
import TransactionHistory from './component/transactionHistory/TransactionHistory';

import users from './helpers/user.json';
import statisticalData from './helpers/statistical-data.json';
import friends from './helpers/friends.json'
import transactions from './helpers/transactions.json'

const App = () => {

    return (
        <>
            <Profile items={users}/>
            <Statistics title="Upload stats" stats={statisticalData}/>
            <FriendList props={friends}/>
            <TransactionHistory items={transactions}/>
        </>
    );
};

export default App;