import React, { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Header from "./components/Header";
import Error from "./components/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mail from "./components/mail";
import Insta from "./components/insta";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          {/* Home */}
          <Route path="/">
          <Route index element={<Home />} / >
          <Route path="/app" element={<Home/>}/>
          </Route>

          <Route path="/app/:userId" element={<UserDetails/>}/>

          {/* About */}
          <Route path="/about" element={<About />} />
          {/* Contact */}
          {/* <Route path = "/contact" element= {<Contact/>}/>  for single route close it */}
          <Route path="/contact" element={<Contact />}>
            <Route index element={<Insta />} />  {/* for default */}
            <Route path="insta" element={<Insta />} />
            <Route path="mail" element={<Mail/>} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
