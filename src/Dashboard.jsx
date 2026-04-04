import { useEffect, useState } from "react";

function Dashboard() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getProfile = async () => {
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:5000/profile", {
        headers: {
          Authorization: token,
        },
      });

      const data = await res.text();
      setMessage(data);
    };

    getProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged out ✅");
    window.location.reload(); // page refresh
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <h2>Dashboard</h2>
      <h3>{message}</h3>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;