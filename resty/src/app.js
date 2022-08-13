import React, { useState } from 'react';

import Header from './components/header/index';
import Footer from './components/footer/index';
import Form from './components/form/index';
import Results from './components/results/index';
import './app.css'

function App() {

  const [user, setUser] = useState({
    data: null,
    requestParams: {},
  });

  async function callApi(requestParams) {
    if (requestParams.method === 'GET') {
      const response = await fetch(requestParams.url);
      const data = await response.json();

      if (requestParams) {
        setUser({ user, data: data, requestParams: requestParams });
      }
    }
  }
  return (
    <React.Fragment>
      <Header />
      <div data-testid='request'>Request Method:{user.requestParams.method}</div>
      <div data-testid='url'>URL: {user.requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={user.data} />

      <Footer />
    </React.Fragment>
  );
}


export default App;