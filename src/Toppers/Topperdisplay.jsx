import React, { useState, useEffect } from "react";
import API from "../api";

const Topperdisplay = () => {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      const res = await API.get("/api/toppers");
      setImages(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div>
      <h1>Topper list</h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {images.map((img) => (
          <div
            key={img._id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "10px",
              textAlign: "center",
              width: "200px",
            }}
          >
            <img
              src={`https://schoolprobackend.onrender.com/uploads/${img.filename}`}
              alt="topper"
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topperdisplay;