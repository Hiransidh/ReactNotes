

import img1 from "./img1.jpg";

function App() {
  return (
    <div style={{display: "flex",justifyContent: "center",alignItems: "center",height: "100vh",backgroundColor: "#f5f5f5"}}>
      <div style={{width: "300px",padding: "20px",textAlign: "center",backgroundColor: "#fff",boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",borderRadius: "10px"}}>
        <img src={img1} style={{width: "200px",height: "200px",borderRadius: "50%",marginBottom: "15px"}}/>
        <h1 style={{ fontSize: "29px", marginBottom: "10px" }}>John Doe</h1>
        <p style={{ fontSize: "16px", color: "#666", marginBottom: "20px" }}>
          Software Developer | React Enthusiast | Open Source Contributor
        </p>
      </div>
    </div>
  );
}

export default App;


