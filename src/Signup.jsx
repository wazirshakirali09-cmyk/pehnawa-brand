import { useState } from "react";
import axios from "axios";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // Ye line Backend (Port 5000) se connect karegi
      const response = await axios.post("http://localhost:5000/signup", {
        email,
        password,
      });
      alert(response.data); // "Signup successful ✅" show hoga
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "serif" }}>
      <h2 style={{ color: "#8b6d31", letterSpacing: "2px" }}>JOIN PEHNAWA</h2>
      <form onSubmit={handleSignup}>
        <input 
          type="email" 
          placeholder="Email Address" 
          onChange={(e) => setEmail(e.target.value)} 
          style={{ padding: "10px", margin: "10px", width: "250px" }}
        />
        <br />
        <input 
          type="password" 
          placeholder="Password" 
          onChange={(e) => setPassword(e.target.value)} 
          style={{ padding: "10px", margin: "10px", width: "250px" }}
        />
        <br />
        <button type="submit" style={{ padding: "10px 30px", background: "#1a1a1a", color: "white", border: "none", cursor: "pointer" }}>
          CREATE ACCOUNT
        </button>
      </form>
    </div>
  );
}

export default Signup;
