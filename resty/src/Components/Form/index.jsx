import React from 'react';
import './Form.scss';

function Form(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: e.target.method.value || "GET", 
      url: e.target.url.value, 
      obj:e.target.textArea.value
    };
    props.handleApiCall(formData);
    props.setloading(false)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input id="Url" name='url' type='text' />
          <button type="submit">GO!</button>
        </label>
        <textarea name="textArea">   </textarea>

        <label className="methods">
          <input data-testid='GET' type="radio" name="method" value="GET" /> GET
          <input type="radio" name="method" value="POST" /> POST
          <input type="radio" name="method" value="PUT" /> PUT
          <input type="radio" name="method" value="DELETE" /> DELETE
        </label>
      </form>
    </>
  );
}

export default Form;
