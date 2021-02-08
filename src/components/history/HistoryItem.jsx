import React from 'react';
import PropTypes from 'prop-types';

const HistoryItem = ({ url, request, id }) => {
  return (
    <div id={id} style={{ backgroundColor: rebeccapurple }}>
      <p>{request}</p>
      <article>{url}</article>
    </div>
  );
};

HistoryItem.proptypes = {
  url: PropTypes.string.isRequired,
  request: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default HistoryItem;
