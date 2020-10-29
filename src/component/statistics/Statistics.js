import React from "react";

import PropTypes from "prop-types";

import style from "./Statistics.module.css";
import StatisticsItems from "../statisticsItems/StatisticsItems";

const Statistics = ({ title, stats }) => {
  // console.log(title);
  // console.log(stats);
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}

      <ul className={style.statList}>
        {stats.map((stat) => (
          <StatisticsItems key={stat.id} items={stat} />
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
    .isRequired,
};

export default Statistics;
