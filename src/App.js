import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/Home/Home.tsx";
import Contact from "./components/Contact/Contact.tsx";
import Buy from "./components/Buy/Buy.tsx";
import { CartProvider } from "./context/CartContext.tsx";
import Basket from "./components/basket/basket.tsx";
import ToggleSwitch from "./components/ToggleSwitch.tsx";
import Footer from "./components/footer/footer.tsx";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <CartProvider>
      <div
        className={`App min-h-screen select-none ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <nav className="flex items-center justify-between bg-gray-800 p-4 text-white dark:bg-gray-900">
          <div className="flex items-center">
            {/*             <img
              src="/path-to-your-logo.png"
              alt="Logo"
  aaaaaaaaaaee            className="h-8 w-auto mr-4"
            /> */}
            <Link to="/" className="text-xl font-bold hover:underline">
              LOGO
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/Basket" className="hover:underline">
              Sepet
            </Link>
            <ToggleSwitch isDarkMode={darkMode} onToggle={toggleDarkMode} />
          </div>
        </nav>

        <div className="p-4">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/buy/:id" element={<Buy />} />
            <Route path="/Basket" element={<Basket />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
