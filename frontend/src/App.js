import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Blog from "./components/Blog";
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
