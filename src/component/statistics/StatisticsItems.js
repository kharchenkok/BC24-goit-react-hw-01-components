import React from 'react';

const StatisticsItems = ({items}) => {
    const {label,percentage}=items
    return (
        
            <li className="item">
            <span className="label">{label}</span>
    <span className="percentage">{percentage}%</span>
          </li>
         
        
    );
};

export default StatisticsItems;