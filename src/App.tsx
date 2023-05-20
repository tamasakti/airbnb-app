import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import ForgotPassword from "./pages/ForgotPassword";
import Offer from "./pages/Offer";
import Profile from "./pages/Profile";
import SignIn from "./pages/Signin";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NoMatch />} />
        <Route path="/" element={<Home />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
