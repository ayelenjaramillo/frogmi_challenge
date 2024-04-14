import React from "react";
import ReactDOM from "react-dom/client";
import Searcher from "./Searcher.jsx";
import Home from "./Home.jsx";
import Create_comment from "./Create_comment.jsx";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route index element= {<Home />}/>  
   {/* <Searcher /> */}
      <Route path= "/create_comment/:id" element= {<Create_comment/>} />   
    </Routes>
  
  </BrowserRouter>
);
