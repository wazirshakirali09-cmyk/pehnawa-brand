import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    alert(data.message);

    if (data.token) {
      localStorage.setItem("token", data.token);
    }
  };

  const getProfile = async () => {
    const token = localStorage.getItem("token");

    const res = await fetch("http://localhost:5000/profile", {
      headers: {
        Authorization: token,
      },
    });

    const data = await res.text();
    alert(data);
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <button onClick={handleLogin}>Login</button>
      <br /><br />
      <button onClick={getProfile}>Get Profile</button>
    </div>
  );
}

export default Login;