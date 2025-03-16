import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/test")  // Proxy will redirect to http://localhost:5000/api/test
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div>
      <h1>CLIQUES</h1>
      <p>{message || "Loading..."}</p>
    </div>
  );
}

export default App;
