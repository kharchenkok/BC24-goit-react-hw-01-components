import React from "react";
import FriendListItem from "./FriendListItem";
import style from "./FriendList.module.css";
import PropTypes from "prop-types";

const FriendList = ({ props }) => {
  // console.log(props);
  return (
    <ul className={style["friends-list"]}>
      {props.map((prop) => (
        <FriendListItem key={prop.id} items={prop} />
      ))}
    </ul>
  );
};
FriendList.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};
export default FriendList;
