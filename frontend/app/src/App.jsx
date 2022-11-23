import React, { useState } from "react";

export const App = () => {
  const [name, setName] = useState("");
  const [apiMessage, setApiMessage] = useState("");

  const handleClick = async () => {
    if (name === "") return;

    const response = await fetch(`/api/hello?name=${name}`, { method: "GET" });
    const message = await response.json();
    setApiMessage(message);
  };

  return (
    <div>
      Enter your name: <br />
      <input onChange={(e) => setName(e.target.value)} value={name} />
      <button onClick={handleClick}>Submit</button>
      <p>API said: {apiMessage}</p>
    </div>
  );
};

export default App;
