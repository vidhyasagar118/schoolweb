import axios from "axios";

const API = axios.create({
  baseURL: "https://schoolprobackend.onrender.com/",
});

export default API;