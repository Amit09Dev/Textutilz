import './App.css';
import Navbar from './components/Navbar'
// import About from './components/About'
import TextForm from './components/TextForm'
import Alert from './components/Alert';
import React, { useState } from 'react'
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [btnText, setBtnText] = useState('dark');
  const [alert, setAlert] = useState('null');

  // A function to set alert type
  const setAlertType = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  // A toggle function for dark/light mode
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setBtnText('Light');
      document.body.style.backgroundColor = '#0A2647';
      setAlertType("Dark mode has been enabled", "success")
      document.title = 'TextUtilz - Dark Mode';
    }
    else {
      setMode('light');
      setBtnText('Dark');
      document.body.style.backgroundColor = 'white';
      setAlertType("Light mode has been enabled", "success")
      document.title = 'TextUtilz - Light Mode';
    }
  }



  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar title="TextUtilz" about="About Us" mode={mode} toggleMode={toggleMode} btnText={btnText} />
        <Alert alert={alert} />
        {/* <Routes> */}
          {/* <Route path="/about" element={<About/>} mode={mode} />
          < Route path="/" element={<TextForm head="Enter your text to analyze" mode={mode} setAlertType={setAlertType} />} /> */}
          <TextForm head="Enter your text to analyze" mode={mode} setAlertType={setAlertType} />
        {/* </Routes> */}
      {/* // </BrowserRouter> */}
      <div className="container">
        <div className="container my-5">
        </div>
      </div>
    </>
  );
}

export default App;
