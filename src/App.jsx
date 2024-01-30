import "./App.css";
import io from "socket.io-client";
const BASE_URL = process.env.REACT_APP_BASE_URL;
import NewMessage from "./components/NewMessage";
const socket = io(BASE_URL, { transports: ["polling", "websocket"] });

function App() {
  return (
    <div className="App">
      <NewMessage socket={socket} />
    </div>
  );
}

export default App;
