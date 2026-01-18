import React from 'react';
import "./Galleryhome.css";
import { Navigate, useNavigate } from 'react-router-dom';
// Example images, replace with your own paths
const images = [
  "https://picsum.photos/id/1015/400/300",
  "https://picsum.photos/id/1016/400/300",
  "https://picsum.photos/id/1018/400/300",
  "https://picsum.photos/id/1020/400/300",
  "https://picsum.photos/id/1024/400/300",
  "https://picsum.photos/id/1025/400/300",
  "https://picsum.photos/id/1030/400/300",
  "https://picsum.photos/id/1031/400/300",
  "https://picsum.photos/id/1033/400/300",
];

const Galleryhome = () => {
  const navigate=useNavigate();
  return (
    <div className='gallerymainhome'>
      <h2>🏫 School Gallery</h2>
      <div className='gallerygrid'>
        {images.map((img, index) => (
          <div className='gallerycard' key={index}>
            <img src={img} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className='morebtn' onClick={()=>{navigate("/gallery")}}>more photos</button>
    </div>
  );
};

export default Galleryhome;
