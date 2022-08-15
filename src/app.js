import React, { useEffect, useState } from 'react';

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

  useEffect(() => {
    if (data || reqParams || bodyData || headers) {
      setReqParams(reqParams);
      setBodyData(bodyData);
      setHeaders(headers);
      setData(data);
    }
    return () => {
      setData(null);
      setReqParams({});
      setBodyData({});
      setHeaders({});
    };
  }, [data, reqParams, bodyData, headers]);

  const callApi = async (reqParams, bodyParams) => {
    const response = await fetch(reqParams.url);
    const data = await response.json();
    const record = "Response: " + JSON.stringify(data, null, 2);
    setData(record);
    setReqParams(reqParams);
    const body = {
      body: bodyParams.body,
    };
    const headers = {
      headers: reqParams.headers,
    };
    setBodyData(body);
    setHeaders(headers);
  }
  return (
    <>
      <Header />
      <div className='url'>URL: {reqParams.url}</div>
      <div className='req'>Request Method: {reqParams.method}</div>
      <Form handleApiCall={callApi} />
      <Results Response={data} method={reqParams.method} bodyData={bodyData} headers={headers} />
      <Footer />
    </>
  )
}

export default App