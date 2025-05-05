import React from 'react';
import logo from './logo.svg';
import './App.css';
import { LoginFormik } from './Components/Login/LoginForm';
import { Provider } from "./components/ui/provider";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { createContext } from 'react';
import Test from './Components/Test';

function App() {

  return (
    <Provider>
        <Router>
          <Routes>
          <Route path="/" Component={LoginFormik}/>
          <Route path="test" Component={Test}/>
          </Routes>
        </Router>
      </Provider>
        )
}
export default App