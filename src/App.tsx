import React from 'react';
import Header from './Components/Header';
import logo from './logo.svg';
import './App.css';
import TableList from './Components/TableList';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="container-xl">
        <div className="table-wrapper">
        <Header/>
        <TableList/>
        

      </div>
      <ToastContainer />
      
    </div>
  );
}

export default App;
