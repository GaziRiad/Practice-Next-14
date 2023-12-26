"use client";

import { useState } from "react";

function Client() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="text-7xl font-bold mb-4 ml-16">{count}</h1>
      <div className="flex gap-4">
        <button
          className="btn btn-primary"
          onClick={() => setCount((c) => c + 1)}
        >
          Increase
        </button>
        <button
          className="btn btn-primary"
          onClick={() => setCount((c) => c - 1)}
        >
          Decrease
        </button>
      </div>
    </div>
  );
}

export default Client;
