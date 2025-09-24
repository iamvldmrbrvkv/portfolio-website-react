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
        <div className="min-h-screen bg-white dark:bg-gray-800 text-black dark:text-gray-100 font-mono">
          <Header />
          <div className="pt-[54px] [@media(max-width:768px)]:pt-[80px]">
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
