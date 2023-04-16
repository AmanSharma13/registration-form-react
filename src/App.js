import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import RegistrationForm from "./components/RegistrationForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistrationValidation from "./components/RegistrationValidation";
import Success from "./components/Success";
import Destinations from "./components/Destinations";
import UpcommingTours from "./components/UpcommingTours";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route
            path="/registrationvalidation"
            element={<RegistrationValidation />}
          />
          <Route path="/success" element={<Success />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/upcomingtours" element={<UpcommingTours />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
