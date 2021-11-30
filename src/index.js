import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact, Pricing, Try, SignUp } from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
	  <Route path="/pricing" element={<Pricing />} />
	        <Route path="/contact" element={<Contact />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/try" element={<Try />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);