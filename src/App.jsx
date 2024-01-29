import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewMessage from "./components/NewMessage";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/chat" element={<NewMessage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
