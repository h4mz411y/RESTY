
import React from 'react'




function Results(props) {
  let body = props.bodyData.body;
  let headers = props.headers.headers;
  return (
    <section data-testid='results'>
      <div className='content'>
        <pre className="header">
          {props.method === 'GET' ? headers : null}
        </pre>
        <pre className="body">
          {
            props.method === 'GET' ? props.Response
              : props.method === 'POST' ? body : 
              props.method === 'PUT' ? body : 
              props.method === 'DELETE' ? 'deleted successfully'
              : <div className='loader'></div>
          }
        </pre>
      </div>
    </section>
  )
}

export default Results