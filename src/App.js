// import {Header} from 'react-bootstrap';
//import Header from './Includes/Header';
import React from 'react';
import { Header } from "./Includes/Header"
import Footer from './Includes/Footer';
import Routes from './Routes/Routes'
import "./Assests/Css/style.css"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
