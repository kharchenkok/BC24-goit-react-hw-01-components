import React from "react";
import PropTypes from "prop-types";

const UserTransaction = ({ items }) => {
  // console.log(items);
  const { type, amount, currency } = items;
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

UserTransaction.propTypes = {
  items: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserTransaction;
