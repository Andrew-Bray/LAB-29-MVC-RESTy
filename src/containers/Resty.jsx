import React, { Component } from 'react';
import History from '../components/history/History';
import Request from '../components/request/Request';
import Response from '../components/response/Response';
import { makeFetch } from '../services/makeFetch';

export default class Resty extends Component {
  state = {
    request: '',
    content: {},
    url: '',
    apiHistory: [],
    response: { HOOOOO: `Why don't ya put some JSON in here budd?` }
  };

  handleClick = ({ target }) => {
    let result;
    this.state.history.forEach(item => {
      if(item.key === target.id){
        result = item;
      }
    });

    this.setState({
      url: result.url,
      request: result.request,
      content: result.content
    });
  }
  

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = async(e) => {
    const { url, request, content, apiHistory } = this.state;
    const newRequest = { 
      url, 
      request };
    e.preventDefault();
    const res = await makeFetch(
      url, request, content);
    this.setState({ response: res });
    this.setState({ apiHistory: [...apiHistory,  { newRequest }] });  
  }

  render() {

    const { request, url, content, response, apiHistory } = this.state;
    return (
      <>
        <main>
          <History apiHistory={apiHistory}
            onClick={this.handleClick} />
          <section className="main-body">
            <Request 
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              request={request}
              content={content}
              url={url}/>
            <Response
              response={response} />
          </section>
        </main>
      </>
    );
  }
}


