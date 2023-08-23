import React from 'react';


function Results(props) {
  return (
    
    <section>
      {props.loading ? (
        <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
      ) : (
        "loading..."
      )}
    </section>
  );
}

export default Results;
