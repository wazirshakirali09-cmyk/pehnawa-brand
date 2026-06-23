function About() {
  return (
    <section
      className="about"
      style={{
        padding: "80px 20px",
        textAlign: "center",
        background: "#f9f9f9"
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          letterSpacing: "3px",
          marginBottom: "20px"
        }}
      >
        About Us
      </h2>

      <p
        style={{
          fontSize: "1.2rem",
          color: "#555",
          maxWidth: "600px",
          margin: "0 auto",
          lineHeight: "1.6"
        }}
      >
        Pehnawa is a modern fashion brand dedicated to creating timeless elegance
        and premium clothing experiences. We blend tradition with modern style
        to deliver something truly unique.
      </p>
    </section>
  );
}

export default About;
