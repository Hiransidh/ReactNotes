
function App() {
  const nav = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#493628",
    color: "white",
    padding: "1rem",
    height: "8vh",
  };
  const links = {
    color: "white",
    textDecoration: "none",
  };

  const link = {
    color: "white",
    textDecoration: "none",
    padding: "0.5rem",
  };

  const container = {
    backgroundImage: `url(${require("./coffee.jpg")})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    
  };

  return (
    <div style={container}>
      <div style={nav}>
        <h1>Coffee Day</h1>
        <div style={links}>
          <a href="" style={link}>Home</a>
          <a href="" style={link}>About</a>
          <a href="" style={link}>Services</a>
          <a href="" style={link}>Contact</a>
        </div>
      </div>
    </div>
  );
}

export default App;
