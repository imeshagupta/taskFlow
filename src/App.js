import "bootstrap/dist/css/bootstrap.min.css";

import Header from "../src/components/Header";
import About from "../src/components/About";
import Footer from "../src/components/Footer";
import Contact from "../src/components/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Tasks from "./components/Tasks";
import { ThemeProvider } from "../src/components/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Tasks />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
