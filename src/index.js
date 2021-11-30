import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact, Pricing, SignUp, SignIn } from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
	  <Route path="/pricing" element={<Pricing />} />
	        <Route path="/contact" element={<Contact />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);