// import {Header} from 'react-bootstrap';
//import Header from './Includes/Header';
import React from 'react';
import { Header } from "./Includes/Header"
import Footer from './Includes/Footer';
import Routes from './Routes/Routes'
import "./Assests/Css/style.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <ToastContainer />
      <Footer />

    </div>
  );
}

export default App;
