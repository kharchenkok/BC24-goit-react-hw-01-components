import React from "react";
import PropTypes from "prop-types";

import style from "./FriendList.module.css";

const FriendListItem = ({ items }) => {
  const { avatar, name, isOnline } = items;
  return (
    <li className={style.item}>
      {isOnline ? (
        <span className={style.online}></span>
      ) : (
        <span className={style.offline}></span>
      )}

      <img className={style.avatar} src={avatar} alt={name} width="48" />
      <p className={style.name}>{name}</p>
    </li>
  );
};
FriendListItem.propTypes = {
  items: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
export default FriendListItem;
