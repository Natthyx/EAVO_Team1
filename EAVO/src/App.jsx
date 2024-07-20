import React from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home/Home";
import Forgotpassword from "./Pages/Forgotpassword/Forgotpassword";
import Otp from "./Pages/verfyOtp/otp";
import ForgotOtp from "./Pages/Forgotpassword/ForgotPassworOtp";
import ResetPassword from "./Pages/Forgotpassword/passworReset";
import ContactUs from "./Pages/ContactUS/ContactUs";
import Aboutus from "./Pages/Aboutus/Aboutus";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import GetInvolved from "./Pages/GetInvolved/GetInvolved";
import WomenTraining from "./Pages/Programs/WomenTraining";
import OurMission from "./Pages/OurMission/OurMission";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route path="verfyEmail" element={<Otp />} />
        <Route path="/ForgotOtp" element={<ForgotOtp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/GetInvolved" element={<GetInvolved />} />
        <Route path="/WomenTraining" element={<WomenTraining />} />
        <Route path="/OurMission" element={<OurMission />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
