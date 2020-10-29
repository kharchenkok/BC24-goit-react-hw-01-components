import React from "react";
import UserTransaction from "../userTransaction/UserTransaction";
import PropTypes from "prop-types";

import style from "./Transaction.module.css";

const TransactionHistory = ({ items }) => {
  // console.log(items);
  return (
    <table className={style.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <UserTransaction key={item.id} items={item} />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
    .isRequired,
};

export default TransactionHistory;
