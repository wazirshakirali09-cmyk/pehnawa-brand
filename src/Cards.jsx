function Cards() {
  const products = [
    {
      id: 1,
      name: "Velvet Rose",
      price: "Rs. 4,500",
      img: "https://via.placeholder.com/250x320"
    },
    {
      id: 2,
      name: "Golden Glow",
      price: "Rs. 6,200",
      img: "https://via.placeholder.com/250x320"
    }
  ];

  const handleAddToCart = (product) => {
    alert(`${product.name} added to cart 🛒`);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        padding: "50px",
        flexWrap: "wrap"
      }}
    >
      {products.map((item) => (
        <div
          key={item.id}
          style={{
            textAlign: "center",
            border: "1px solid #eee",
            padding: "15px",
            borderRadius: "12px",
            transition: "0.3s",
            cursor: "pointer"
          }}
        >
          <img
            src={item.img}
            alt={item.name}
            style={{
              width: "250px",
              borderRadius: "10px"
            }}
          />

          <h3 style={{ fontSize: "16px", marginTop: "10px" }}>
            {item.name}
          </h3>

          <p style={{ color: "#8b6d31" }}>
            {item.price}
          </p>

          <button
            onClick={() => handleAddToCart(item)}
            style={{
              marginTop: "10px",
              padding: "10px 20px",
              border: "1px solid #8b6d31",
              background: "#1a1a1a",
              color: "#fff",
              cursor: "pointer"
            }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cards;
