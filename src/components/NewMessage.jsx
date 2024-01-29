import React, { useCallback, useEffect, useMemo, useState } from "react";
import io from "socket.io-client";
const BASE_URL = "http://localhost:8080";

export default function NewMessage() {
  const socket = io.connect(BASE_URL);
  const [newMessages, setNewMessages] = useState([]);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const memoizedSocket = useMemo(() => socket, [socket]);

  useEffect(() => {
    // Listen for messages from the server
    memoizedSocket.on("receivedMessage", (data) => {
      setNewMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      memoizedSocket.off("receivedMessage");
      socket.disconnect();
    };
  }, [memoizedSocket]);

  const handleSubmit = () => {
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    if (!name || !message) {
      return setError("Missing required field.");
    } else {
      setError("");

      // Send the new message to the server
      socket.emit("sendMessage", { name: name, message: message });

      // Clearing input fields
      setName("");
      setMessage("");
    }
  };

  return (
    <>
      <h1 className="text-2xl md:text-4xl mb-5">Welcome to WebSocket App!</h1>
      <div className="mx-auto border p-2 w-[100%] md:w-[60%] bg-black rounded">
        <span className="ms-5">Name </span>
        <input
          type="text"
          placeholder="Enter your name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-[70%] md:w-[80%] p-2 text-zinc-800 rounded mb-2"
        />
        {error && <p>{error}</p>}
        <br />
        <span className="align-top">Message </span>
        <textarea
          rows="2"
          placeholder="Enter your message.."
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-[70%] md:w-[80%] p-2 text-zinc-800 rounded"
        ></textarea>
        {error && <p>{error}</p>}
        <br />
        <button
          onClick={handleSubmit}
          className="border-2 px-2 py-1 rounded bg-zinc-900 hover:bg-zinc-700"
        >
          Send
        </button>
      </div>
      <div id="messages" className="text-zinc-200">
        {newMessages.map((message, index) => (
          <div key={index} className=" my-2 w-fit mx-auto p-2">
            <h3>Name: {message.name}</h3>
            <span>Message: {message.message}</span>
          </div>
        ))}
      </div>
    </>
  );
}
