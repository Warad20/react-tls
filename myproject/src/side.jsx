import React from "react";
function Header(props) {
  return (
    <>
      <div
        style={{
          background: "red",
          color: "white",
          width: "300px",
          height: "1000px",
          borderRadius: "10px",
          fontFamily: "monospace",
          fontSize: "30px",
        }}
      >
        <p>Home</p>
        <p>
          About
          <br />
          {props.name}
          {props.age}
          <br />
          {props.number}
        </p>
        <p>Service</p>
        <p>Contact</p>
      </div>
    </>
  );
}
export default Header;
