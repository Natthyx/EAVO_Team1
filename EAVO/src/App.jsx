import React from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home/Home";
import Forgotpassword from "./Pages/Forgotpassword/Forgotpassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
      </Routes>
    </Router>
  );
}

export default App;
