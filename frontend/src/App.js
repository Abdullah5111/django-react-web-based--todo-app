import "./App.css";
import Header from "./components/Header";
import BlogListPage from "./pages/BlogListPage";
import BlogPage from "./pages/BlogPage";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="app">
          <Header/>
          <Routes>
            <Route path="/" exact element={<BlogListPage />} />
            <Route path="/blog/:id" element={<BlogPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
