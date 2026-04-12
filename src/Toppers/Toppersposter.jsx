import React, { useState, useEffect } from "react";
import API from "../api";

const Toppersposter = () => {
  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);
const handleUpload = async () => {
  if (!image) return alert("Please select image");

  const formData = new FormData();
  formData.append("file", image);

  await API.post("/api/upload-topper", formData);

  fetchImages();
};

const fetchImages = async () => {
  const res = await API.get("/api/toppers");
  setImages(res.data);
};

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🏆 Toppers List</h1>

      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <button onClick={handleUpload}>Upload</button>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "20px",
        }}
      >
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
            <p>{img.filename}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toppersposter;