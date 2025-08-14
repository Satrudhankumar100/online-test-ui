import React from "react";
import Header from "./components/header/Header"
import { Route, Routes } from "react-router-dom";
import TestSeries from "./components/testseries/TestSeries";
import PageNotFound from "./components/pagenotfound/PageNotFound";
import Home from "./screens/Home";
import Test from "./screens/Test";

function App() {
  

  return (
    <>
    
    <Routes>
      
       <Route path={"/"} element={<Home/>}></Route>
       <Route path={"/testseries"} element={<TestSeries/>}></Route>
       <Route path={"/start-test"} element={<Test/>}></Route>
      
      
       <Route path={"/*"} element={<PageNotFound/>}></Route>
      
    </Routes>
    
    </>
  )
}

export default App
