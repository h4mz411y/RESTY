import React from 'react';
import { useState } from 'react';

import './app.css';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';




function App() {

  const [request, setrequest] = useState({
    data: null,
    requestParams: {},
  });


  async function callApi(requestParams) {
    while (requestParams.method === 'GET') {
      const response = await fetch(requestParams.url);
      const data = await response.json();
      setrequest({ request, data: data, requestParams: requestParams });
    }




  }


  return (
    <React.Fragment>
      <Header />
      <h3 >URL: {request.requestParams.url}</h3>
      <Form handleApiCall={callApi} />
      <Results data={request.data} />

      <Footer />
    </React.Fragment>
  );
}


export default App;