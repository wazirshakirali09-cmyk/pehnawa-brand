import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    alert("Account created successfully ✅");

    console.log({ email, password });
  };

  return (
    <div style={{ textAlign: "center", padding: "100px 20px" }}>
      <h2 style={{ letterSpacing: "3px" }}>CREATE ACCOUNT</h2>

      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="EMAIL"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />

        <input
          type="password"
          placeholder="PASSWORD"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />

        <button type="submit">JOIN NOW</button>
      </form>
    </div>
  );
}

export default Signup;
