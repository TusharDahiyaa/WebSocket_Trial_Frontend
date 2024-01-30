import "./App.css";
import io from "socket.io-client";
const BASE_URL = process.env.REACT_APP_BASE_URL;
import NewMessage from "./components/NewMessage";
const socket = io.connect(BASE_URL);

function App() {
  return (
    <div className="App">
      <NewMessage socket={socket} />
    </div>
  );
}

socket.on("connect_error", (err) => {
  console.log(err.message);
  console.log(err.description);
  console.log(err.context);
});

export default App;
