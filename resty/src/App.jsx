import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './App.scss';

// Let's talk about using index.js and some other name in the component folder.
// There's pros and cons for each way of doing this...
// OFFICIALLY, we have chosen to use the Airbnb style guide naming convention. 
// Why is this source of truth beneficial when spread across a global organization?
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

function App ()  {

 const [data,setData]=useState({})
   const [show, setShow] = useState(false)
     const [header, setHeader] = useState()

 const [requestParams,setrequestParams]=useState({})
 const [loading,setloading]=useState(false)

    console.log(requestParams);

  const callApi = (requestParams) => {
    // // mock output
    // const  x= requestParams.method.evil()
    // console.log(x);
    if(requestParams.method === "POST" ){
      
      const PostInput = axios.post(`${requestParams.url}`,requestParams.obj).then((data)=>{
        console.log(data);
        setData(data)
        setrequestParams(requestParams)
      })
    } else if(requestParams.method === "PUT" ){
      
      axios.put(`${requestParams.url}`,requestParams.obj).then((data)=>{
        console.log(data);
        setData(data)
        setrequestParams(requestParams)
      })
    }
    else{
    const urlInput = axios.get(`${requestParams.url}`).then((data)=>{
      const contentType = data.headers;
      console.log(data);
      setData(data)
        setHeader(contentType)
      setShow(true)
      setloading(false)
      setloading(true)

      setrequestParams(requestParams)
    })}
    
  }
  useEffect(() => {
    // setData()
  }, [requestParams,data])
 
    return (
      <React.Fragment>
        <Header />
        <div data-testid="URL" >URL: {requestParams.url}</div>
        <div>Request Method: {requestParams.method} </div>
        <Form handleApiCall={callApi} setloading={setloading}  />
        {
        show &&
        <Results  handleApiCall ={callApi} response={data} header={header} loading={loading} setrequestParams={setrequestParams} />
      }        <Footer />
      </React.Fragment>
    );
  
}

export default App;
