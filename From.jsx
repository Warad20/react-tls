import React from "react";
import "./From.css";

const HandleClick = () => {
  alert("you are success full");
};

function User() {
  return (
    <div className="form">
      <div className="main">
        <h1>Welcome this form</h1>

        <label>Fname</label>
        <input type="text" />

        <label>Lname</label>
        <input type="text" />

        <label>Email</label>
        <input type="text" />

        <label>company Name</label>
        <input type="text" />

        <label>
          job <title></title>
        </label>
        <input type="text" />

        <button onClick={HandleClick}>Login</button>
      </div>

      {/* Image Side */}
      <div className="image-side">
        <img
          src="https://img.magnific.com/free-vector/cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37328.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Login"
        />
      </div>
    </div>
  );
}

export default User;
