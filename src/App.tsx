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
        <div className="min-h-screen bg-white dark:bg-[rgb(32,33,36)] text-black dark:text-gray-100">
          <Header />
          <div className="pt-[113px] [@media(min-width:376px)]:pt-[81px] [@media(min-width:426px)]:pt-[54px] [@media(min-width:769px)]:pt-[53px]">
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
