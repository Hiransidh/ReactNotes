function App() {

  
  return (
    <div className="container">
      <style>
        {`
          .container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
          .card {
            width: 300px;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
          }
          .profile {
            width: 200px;
            border-radius: 50%;
            margin: 0 auto 20px; 
          }
          h1 {
            margin: 0 0 10px;
          }
          p {
            margin: 0;
            color: #777;
          }
          `}
      </style>
      <div className="card">
        <img src={require('./img1.jpg')} alt="John Doe" className="profile" />
        <h1>John Doe</h1>
        <p>Software Developer | React Enthusiast | Open Source Contributor</p>
      </div>
    </div>
  );
}

export default App;
