import React from 'react';

const UserStats = ({props}) => {
  // console.log(props);

  return Object.entries(props).map((prop,index)=>(
    <li key={index}>
  <span className="label">{prop[0]}</span>
  <span className="quantity">{prop[1]}</span>
  </li>
  ))
  
  
};

export default UserStats;