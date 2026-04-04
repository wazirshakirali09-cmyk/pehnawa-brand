import { useState } from "react";
import axios from "axios";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/signup", { email, password });
      alert("Welcome to Pehnawa! ✅");
    } catch (err) { alert("Signup Failed ❌"); }
  };

  return (
    <div style={{ textAlign: "center", padding: "100px 20px" }}>
      <h2 style={{ letterSpacing: "3px" }}>CREATE ACCOUNT</h2>
      <form onSubmit={handleSignup}>
        <input type="email" placeholder="EMAIL" onChange={(e) => setEmail(e.target.value)} required /><br/>
        <input type="password" placeholder="PASSWORD" onChange={(e) => setPassword(e.target.value)} required /><br/>
        <button type="submit">JOIN NOW</button>
      </form>
    </div>
  );
}
export default Signup;
