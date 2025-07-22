import React from "react";
import Header from "./components/header/Header"
import { Route, Routes } from "react-router-dom";
function App() {
  

  return (
    <>
    <Routes>
       <Route path={"/"} element={<Header/>}></Route>
    </Routes>
    
    </>
  )
}

export default App
