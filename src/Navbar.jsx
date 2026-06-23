function Navbar() {
  return (
    <nav
      style={{
        padding: "20px 40px",
        borderBottom: "1px solid #eee",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        background: "#fff",
        position: "sticky",
        top: "0",
        zIndex: "1000"
      }}
    >
      <h1
        style={{
          letterSpacing: "5px",
          fontSize: "24px",
          margin: 0
        }}
      >
        PEHNAWA
      </h1>

      <div
        style={{
          fontSize: "14px",
          letterSpacing: "1px",
          display: "flex",
          gap: "20px"
        }}
      >
        <span>HOME</span>
        <span>NEW ARRIVALS</span>
        <span>UNSTITCHED</span>
        <span>READY TO WEAR</span>
      </div>
    </nav>
  );
}

export default Navbar;
