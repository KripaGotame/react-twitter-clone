import Home from "../Home";
import Navbar from "../Pages/Navbar";
import About from "../About";

import {Route, BrowserRouter, Routes } from "react-router-dom";
import SingleTweet from "../Pages/SingleTweet";
const Shell = () => {
    return <>
    
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route index element= {<Home />} />
        <Route path ="/about" element={<About />} />
        <Route path="/tweet/:id" element={<SingleTweet/>} />
    </Routes>
    </BrowserRouter>
    </>
};

export default Shell;