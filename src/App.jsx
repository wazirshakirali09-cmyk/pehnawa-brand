import { useState } from "react";
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Cards from './Cards'
import Footer from './Footer'
import Login from './Login'
import Signup from './Signup'
import Dashboard from './Dashboard'

function App() {
  const [page, setPage] = useState("home");

  // Navigation Button Style
  const btnStyle = {
    padding: "10px 20px",
    margin: "5px",
    cursor: "pointer",
    border: "1px solid #8b6d31",
    background: "transparent",
    color: "#1a1a1a",
    fontFamily: "serif",
    letterSpacing: "1px",
    textTransform: "uppercase"
  };

  return (
    <div>
      <Navbar />

      {/* Navigation Menu */}
      <div style={{ textAlign: "center", padding: "20px", backgroundColor: "#fdfdfd" }}>
        <button style={btnStyle} onClick={() => setPage("home")}>Home</button>
        <button style={btnStyle} onClick={() => setPage("signup")}>Join Us</button>
        <button style={btnStyle} onClick={() => setPage("login")}>Sign In</button>
        <button style={btnStyle} onClick={() => setPage("dashboard")}>Account</button>
      </div>

      {page === "home" && (
        <>
          <Hero />
          <About />
          <Cards />
        </>
      )}

      {page === "login" && <Login />}
      {page === "signup" && <Signup />}
      {page === "dashboard" && <Dashboard />}

      <Footer />
    </div>
  );
}

export default App;
