function Cards() {
  const products = [
    { id: 1, name: "Velvet Rose", price: "Rs. 4,500", img: "https://placeholder.com" },
    { id: 2, name: "Golden Glow", price: "Rs. 6,200", img: "https://placeholder.com" }
  ];

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "20px", padding: "50px" }}>
      {products.map(item => (
        <div key={item.id} style={{ textAlign: "center" }}>
          <img src={item.img} alt={item.name} style={{ width: "250px" }} />
          <h3 style={{ fontSize: "16px", marginTop: "10px" }}>{item.name}</h3>
          <p style={{ color: "#8b6d31" }}>{item.price}</p>
        </div>
      ))}
    </div>
  );
}
export default Cards;
