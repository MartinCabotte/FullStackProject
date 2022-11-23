import React, { useState } from "react";

export const App = () => {
  const [name, setName] = useState("");
  const [apiMessage, setApiMessage] = useState("");

  const handleClick = async () => {
    if (name === "") return;

    const response = await fetch(`/api/avion?file=${name}`, { method: "GET" });
    const message = await response.json();
    setApiMessage(message);
  };

  return (
    <div>
      Entrer le fichier à traiter: <br />

      <input type="file" onChange={(e) => setName(e.target.value)} value={name} id="img" name="img" accept="image/*" />
      <button onClick={handleClick}>Submit</button>
      <p>Path du fichier: {apiMessage}</p>
    </div>
  );
};

export default App;
