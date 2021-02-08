import React from 'react';
import styles from './request.css';
import PropTypes from 'prop-types';


const Request = ({ url, content, handleChange, handleSubmit }) => {
  return (
    <div className={styles.Request}>
      <form onSubmit= {handleSubmit}>
        <section>
          <label htmlFor="url-box">API url input</label>
          <input type="text" value={url} placeholder="Some cool API..."
            onChange={handleChange} name="url" id="url-box" />
        </section>
        <section>
          <input type="radio" value="GET" id="get-request"
            onChange={handleChange} name="request" />
          <label htmlFor="get-request">GET</label>
          <input type="radio" value="POST" id="post-request"
            onChange={handleChange} name="request" />
          <label htmlFor="post-request">POST</label>
          <input type="radio" value="PATCH" id="patch-request"
            onChange={handleChange} name="request" />
          <label htmlFor="patch-request">PATCH</label>
          <input type="radio" value="PUT" id="put-request"
            onChange={handleChange} name="request" />
          <label htmlFor="put-request">PUT</label>
          <input type="radio" value="DELETE" id="delete-request"
            onChange={handleChange} name="request" />
          <label htmlFor="delete-request">DELETE</label>
        </section>
        <div>
          <label>Put your JSON here:</label>
          <textarea value={content}
            name="content" 
            id="content-box"
            onChange={handleChange} />
          <input type="submit" value="Make Request" />
        </div>
      </form>
    </div>
  );
};

Request.propTypes = {
  url: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default Request;
