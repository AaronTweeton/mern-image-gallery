import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { New } from "./pages/New";
import { Show } from "./pages/Show";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/:id" element={<Show />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
