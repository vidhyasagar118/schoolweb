import React, { useState, useEffect } from "react";
import API from "../../api";
const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [files, setFiles] = useState([]);

 const handleUpload = async () => {
  const formData = new FormData();
  formData.append("file", file);

  await API.post("/api/upload", formData);
  fetchFiles();
};

const fetchFiles = async () => {
  const res = await API.get("/api/files");
  setFiles(res.data);
};

  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>File Upload</h2>

      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>

      <h3>Files List</h3>
      {files.map((f) => (
        <div key={f._id}>
          <span>{f.filename}</span>
          <a
            // ✅ sahi
            href={`https://schoolprobackend.onrender.com/uploads/${f.filename}`} target="_blank"
            rel="noreferrer"
          >
            <button>Open</button>
          </a>
        </div>
      ))}
    </div>
  );
};

export default FileUpload;