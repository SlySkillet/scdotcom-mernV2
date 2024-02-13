import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Blog from "./components/blog/Blog";
import Projects from "./components/projects/Projects";
import HomePage from "./components/home/HomePage";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="grid">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
