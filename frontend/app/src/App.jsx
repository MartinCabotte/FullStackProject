import React, { useState } from "react";

export const App = () => {
  const [apiMessage, setApiMessage] = useState("");

  const handleClick = async (e) => {
    console.log(e)
    const name = e.target.files[0].name
    if (name === "") return;

    const path = "/home/cabotte/Documents/Perso/" + name

    // console.log(name[0].name)
    const response = await fetch(`/api/avion?image=${path}`, { method: "GET" });
    const message = await response.json();
    setApiMessage(message);
  };

  return (
    <div>
      Entrer le fichier à traiter: <br />

      <input type="file" onChange={handleClick} id="img" name="img" accept="image/*" />
      
      <p>Path du fichier: {apiMessage}</p>
    </div>
  );
};

export default App;
