import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DarkModeProvider } from "./context";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ContactPage from "./pages/Contact";

function App() {
  return (
    <DarkModeProvider>
      <Router basename="/portfolio-website-react/">
        <div className="min-h-screen bg-white text-black dark:bg-[rgb(32,33,36)] dark:text-gray-100">
          <Header />
          <div className="pt-[143px] min-[425px]:pt-[95px] min-[768px]:pt-[70px]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
