import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="card">
        <img src={require("./img1.jpg")} alt="John Doe" className="profile" />
        <h1>John Doe</h1>
        <p>Software Developer | React Enthusiast | Open Source Contributor</p>
      </div>
    </div>
  );
}

export default App;
