import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
function AllfilesRoutes(){
    return <>
    <BrowserRouter>
    <Routes>
        <Route path="/home" element={<Home></Home>}/>
        <Route path="/About" element={<About></About>}/>
    </Routes>
    </BrowserRouter>
    </>
}
export default AllfilesRoutes;