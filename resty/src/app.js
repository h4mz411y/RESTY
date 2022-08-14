import React, { useState } from 'react';

import Header from './components/header/index';
import Footer from './components/footer/index';
import Form from './components/form/index';
import Results from './components/results/index';
import './app.css'
function App() {
  const [data, setData] = useState(null);
  const [reqParams, setReqParams] = useState({});
  const [bodyData, setBodyData] = useState({});
  const [headers, setHeaders] = useState({});

  const callApi = async (reqParams, bodyParams) => {
    const response = await fetch(reqParams.url);
    const data = await response.json();
    setData(data);
    setReqParams(reqParams);
    const body = {
      body: bodyParams.body,
    };
    const headers = {
      headers: reqParams.headers,
    };
    console.log('headers', headers);
    setBodyData(body);
    setHeaders(headers);
  }
  return (
    <>
      <Header />
      <div className='url'>URL: {reqParams.url}</div>
      <div className='req'>Request Method: {reqParams.method}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} method={reqParams.method} bodyData={bodyData} headers={headers} />
      <Footer />
    </>
  )
}

export default App