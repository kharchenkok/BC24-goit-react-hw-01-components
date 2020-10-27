import React from 'react';
import StatisticsItems from './StatisticsItems';

const Statistics = ({title, stats}) => {
    // console.log(title);
    // console.log(stats);
    return (
        <section className="statistics">
        {title&&<h2 className="title">{title}</h2>}
      
        <ul className="stat-list">
          {stats.map(stat=><StatisticsItems key={stat.id} items={stat}/>)}
        </ul>
      </section>
    );
};

export default Statistics;