// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./index.css";
// import Home from "./components/Home";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/*" element={<Home />} />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );


import React from 'react'
// import HomePage from './landing_page/home/HomePage'
// import Navbar from "../src/landing_page/Navbar";
// import Footer from "../src/landing_page/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
const App = () => {
  return (
    <div className=''>
     <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App