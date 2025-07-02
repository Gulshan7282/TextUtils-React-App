import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // const removeBodyClasses =() => {
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-warning')
  // }

  // const toggleMode = (cls) => {
  const toggleMode = () => {
    // removeBodyClasses();
    // console.log(cls)
    // document.body.classList.add('bg-'+cls)
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#042743";
      showAlert("Dark Mode has been Enable", "success");
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("Light Mode has been Enable", "success");
    }
  };
  return (
    <>
    {/* <Router>  */}
      <Navbar
        tittle="TextUtils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
        />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes>
          <Route path="/about" element={
            <About 
              mode={mode}
            />
            } />
          <Route path="/" element={
            <TextForm
              heading=" Try TextUtlis - Word Counter, Character Counter, Remove Extra Spaces "
              mode={mode}
              toggleMode={toggleMode}
              showAlert={showAlert}
              />
            }
            />
        </Routes> */}
        {<TextForm
              heading="Enter the text to analyze Below"
              mode={mode}
              toggleMode={toggleMode}
              showAlert={showAlert}
              />}

        
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
