import React from 'react';


function Results(props) {
  function next (){

    // props.setrequestParams()
    props.handleApiCall({url:props.response.data.next})
  }
  function previous (){

    // props.setrequestParams()
    props.handleApiCall({url:props.response.data.previous})
  }

  return (
    props.loading ?
      <section>
        <div>
          <pre className='header'>{JSON.stringify({ Headers: props.header }, undefined, 2)}</pre>
          <pre className='data'>{JSON.stringify(props.response, undefined, 2)}</pre>
         {props.response.data.previous &&
        <button onClick={previous}>previous</button>
        }
          {
            props.response.data.next &&
         <button  onClick={next}>Next</button>
          }

        </div>
      </section>
      : 'loading...'
  )
}

export default Results;
