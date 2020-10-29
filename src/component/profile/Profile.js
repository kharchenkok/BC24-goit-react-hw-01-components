import React from "react";
import UserStats from "../userStats/UserStats";
import PropTypes from "prop-types";

// import UserDescription from '../userStats/UserStats';
import style from "./Profile.module.css";

const Profile = ({ items }) => {
  // console.log(items);
  const { avatar, name, tag, location, stats } = items;

  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img src={avatar} width="250" alt="user avatar" className="avatar" />
        <p className={style.name}>{name}</p>
        <p className={style.tag}>@{tag}</p>
        <p className={style.location}>{location}</p>
      </div>
      <ul className={style.stats}>
        <UserStats props={stats} />
      </ul>
    </div>
  );
};

Profile.propTypes = {
  items: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
  }).isRequired,
};

export default Profile;
