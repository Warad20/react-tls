function Dashboard({ name, price, status }) {
  const HandleClick = () => {
    alert("you are selected");
  };

  return (
    <div
      style={{
        background: "white",
        color: "black",
        fontFamily: "monospace",
        width: "250px",
        height: "200px",
        borderRadius: "12px",
        padding: "15px",
        textAlign: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        display: "inline-block",
        gap: "10px",
        padding: "0px",
        margin: "25px",
      }}
    >
      <h1> {name} </h1>
      <p>price:{price}</p>
      <p>{status === "instock" ? "instock" : "outstock"}</p>
      <button
        onClick={HandleClick}
        style={{
          backgroundColor: "green",
          borderRadius: "8px",
          padding: "8px",
        }}
      >
        View Course
      </button>
    </div>
  );
}

export default Dashboard;
