import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from "../pages/Login/LoginPage";
import HomePage from "../pages/Home/HomePage";
import SearchPage from "../pages/Search/SearchPage";
import LibraryPage from "../pages/Library/LibraryPage";

const Router=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<LoginPage/>} />
                <Route exact path='/login' element={<LoginPage/>} />
                <Route exact path= '/home' element={<HomePage/>} />
                <Route exact path= '/search' element={<SearchPage/>} />
                <Route exact path= '/library' element={<LibraryPage/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router