import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Blog from "./components/blog/Blog";
function App() {
  return (
    <div className="grid">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
