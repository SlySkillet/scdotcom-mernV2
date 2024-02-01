import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Blog from "./components/blog/Blog";
import Projects from "./components/projects/Projects";
function App() {
  return (
    <div className="grid">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
