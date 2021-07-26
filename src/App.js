import logo from './logo.svg';
import './App.css';
import './style.css'
import Home from "./components/Home/home"
import NavBar from "./components/navbar"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Nav } from 'react-bootstrap';
import Particles from "react-particles-js"
import Params from "./components/particlesjs-config.json"
import Preloader from "../src/components/Pre";
import React, { useState, useEffect } from "react";

function App() {
  const [load, updateLoad] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);
  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
      <Particles params={Params}/>
      <NavBar/>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
