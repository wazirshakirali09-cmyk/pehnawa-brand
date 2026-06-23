import { useEffect, useState } from "react";

function Dashboard() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    const getProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          setMessage("No token found. Please login.");
          return;
        }

        const res = await fetch("http://localhost:5000/profile", {
          headers: {
            Authorization: token,
          },
        });

        const data = await res.text();
        setMessage(data);
      } catch (error) {
        setMessage("Error loading profile ❌");
        console.log(error);
      }
    };

    getProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged out ✅");
    window.location.href = "/";
  };

  return (
    <div
      style={{
        marginTop: "50px",
        textAlign: "center",
        fontFamily: "serif"
      }}
    >
      <h2>Dashboard</h2>

      <h3 style={{ color: "#8b6d31" }}>{message}</h3>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
