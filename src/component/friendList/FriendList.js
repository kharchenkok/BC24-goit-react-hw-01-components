import React from 'react';
import FriendListItem from './FriendListItem';

const FriendList = ({props}) => {
    // console.log(props);
    return (
        <ul className="friend-list">
        {props.map(prop=><FriendListItem key={prop.id} items={prop}/>)}
      </ul>
    );
};

export default FriendList;