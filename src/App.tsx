import { Routes, Route } from "react-router-dom";
import { DarkModeProvider } from "./context";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ContactPage from "./pages/Contact";

function App() {
  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-800 text-black dark:text-gray-100 font-mono">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </DarkModeProvider>
  );
}

export default App;
