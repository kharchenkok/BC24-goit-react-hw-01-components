import React from "react";
import style from "./Profile.module.css";
import PropTypes from "prop-types";

const UserStats = ({ props }) => {
  // console.log(props);

  return Object.entries(props).map((prop, index) => (
    <li key={index}>
      <span className={style.label}>{prop[0]}</span>
      <span className={style.quantity}>{prop[1]}</span>
    </li>
  ));
};

UserStats.protoType = {
  props: PropTypes.objectOf(
    PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default UserStats;
