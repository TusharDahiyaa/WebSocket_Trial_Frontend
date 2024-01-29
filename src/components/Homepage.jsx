import React, { useState } from "react";

export default function Homepage() {
  return (
    <>
      <h1 className="text-center font-bold text-4xl md:text-6xl lg:text-8xl tracking-tight leading-none mb-20">
        Welcome to WebSocket Chat Room!
      </h1>
      <p className="text-center text-2xl mt-4">
        This is a simple chat application that uses the WebSockets API for
        real-time communication between users. It currently allows two or more
        users to join and participate in a single chat with each other, sharing
        messages in real time.
      </p>

      <button
        onClick={() => {
          window.location.href = `/chat`;
        }}
        type="button"
        className="mt-10 w-full max-w-sm rounded overflow-hidden shadow-lg bg-indigo-500 text-white font-bold py-3 px-2"
      >
        Start a new chat
      </button>
    </>
  );
}
