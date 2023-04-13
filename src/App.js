import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import RegistrationForm from "./components/RegistrationForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistrationValidation from "./components/RegistrationValidation";

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
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
