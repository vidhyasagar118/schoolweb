import axios from "axios";

const API = axios.create({
  baseURL: "https://schoolprobackend.vercel.app/",
});

export default API;