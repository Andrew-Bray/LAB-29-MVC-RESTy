import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import styles from './response.css';

const Response = ({ response }) => {
  return (
    <div className={styles.Response}>
      <h2>look below:</h2>
      <pre data-testid="json-response">
        <ReactJson src={response} theme="apathy:inverted"/>
      </pre>

    </div>
  );
};

Response.propTypes = {
  response: PropTypes.object.isRequired
};

export default Response;
