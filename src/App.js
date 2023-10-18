/* eslint-disable no-unused-expressions */
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {BrowserRouter, Link, Route, Routes} from  'react-router-dom';
import AllfilesRoutes from './routes/AllfilesRoutes';
function App(){
 

  return (
    <div>
     <AllfilesRoutes></AllfilesRoutes>
    </div>
  );
}
export default App;