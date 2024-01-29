import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
function App() {
  return (
    <div className="grid">
      <BrowserRouter>
        <Routes>
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
