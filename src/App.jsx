import React from "react";
import Header from "./components/header/Header"
import { Route, Routes } from "react-router-dom";
import TestSeries from "./components/testseries/TestSeries";
import PageNotFound from "./components/pagenotfound/PageNotFound";

function App() {
  

  return (
    <>
    
    <Routes>
      
       <Route path={"/"} element={<Header/>}></Route>
       <Route path={"/testseries"} element={<TestSeries/>}></Route>
       <Route path={"/*"} element={<PageNotFound/>}></Route>
      
    </Routes>
    
    </>
  )
}

export default App
