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
import ChildSupport from "./Pages/Programs/ChildSupport";
import OurMission from "./Pages/OurMission/OurMission";
import HealthCare from './Pages/Programs/Healthcare';
import EducationIntiative from './Pages/Programs/EducationIntiative';
import SafeShelter from './Pages/Programs/SafeShelter';
import CommunityLeadership from './Pages/Programs/CommunityLeadership';
import AdvocacyAwareness from './Pages/Programs/AdvocacyAwareness';
import CommunitySupport from './Pages/Programs/CommunitySupport';
import Charity from './Pages/Programs/Charity';
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
        <Route path="/ChildSupport" element={<ChildSupport />} />
        <Route path="/HealthCare" element={<HealthCare />} />
        <Route path="/EducationIntiative" element={<EducationIntiative />} />
        <Route path="/SafeShelter" element={<SafeShelter />} />
        <Route path="/CommunityLeadership" element={<CommunityLeadership />} />
        <Route path="/AdvocacyAwareness" element={<AdvocacyAwareness />} />
        <Route path="/CommunitySupport" element={<CommunitySupport />} />
        <Route path="/Charity" element={<Charity />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
