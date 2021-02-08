import React from 'react';
import styles from './history.css';
import HistoryItem from './HistoryItem';
import PropTypes from  'prop-types';

const History = ({ apiHistory, onClick }) => {
  const historyElements = apiHistory.map((item) => {
    return (
      <li key={`${item.url}${item.request}`} onClick={onClick}>
        <HistoryItem
          url={item.url}
          request={item.request}
          id={`${item.url}${item.request}`}
        />
      </li>
    );
  });

  return (
    <div className={styles.History}>
      <ul>
        {historyElements}
      </ul>
    </div>
  );
};

History.propTypes = {
  apiHistory: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    request: PropTypes.string.isRequired,
  })).isRequired,
  onClick: PropTypes.func.isRequired
};

export default History;
