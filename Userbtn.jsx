import React, { useState } from "react";

function User_data() {
  const [name, setName] = useState("");
  const [massage, setmassage] = useState("");

  function Hello() {
    setmassage(` Hello ${name}`);
  }

  return (
    <div>
      <h1>Student Name App</h1>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />

      <h1>Hello {name}</h1>
      <button onClick={Hello}> welcome dear user</button>
    </div>
  );
}
export default User_data;
