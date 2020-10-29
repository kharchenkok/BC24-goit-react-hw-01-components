import React from "react";
import FriendListItem from "../friendListItem/FriendListItem";
import style from "./FriendList.module.css";
import PropTypes from "prop-types";

const FriendList = ({ friends }) => {
  // console.log(props);
  return (
    <ul className={style["friends-list"]}>
      {friends.map((friend) => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ),
};
export default FriendList;
