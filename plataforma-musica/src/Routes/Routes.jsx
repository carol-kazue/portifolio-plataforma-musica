import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from "../pages/LoginPage/LoginPage";
import HomePage from "../pages/HomePage/HomePage";
import SearchPage from "../pages/SearchPage/SearchPage";
import LibraryPage from "../pages/LibraryPage/LibraryPage";

const Router=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<LoginPage/>} />
                <Route exact path='/login' element={<LoginPage/>} />
                <Route exact path= '/' element={<HomePage/>} />
                <Route exact path= '/search' element={<SearchPage/>} />
                <Route exact path= '/library' element={<LibraryPage/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router