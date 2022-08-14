
import React from 'react'

import './result.css' ; 


function Results(props) {

  return (
    <section data-testid='results'>
      <div className='content'>
        <div className="header">
        <pre>{props.headers ? JSON.stringify(props.headers.headers, undefined, 2) : null}</pre>
        </div>
        <br />
        {
          <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
        }
      </div>
    </section>
  )
}

export default Results