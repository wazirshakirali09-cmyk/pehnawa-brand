import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <h2>Peh-Nawa</h2>

      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <ul className={open ? "show" : ""}>
        <li>Home</li>
        <li>About</li>
        <li>Rooms</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;