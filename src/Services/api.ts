import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", // Make sure backend is running
});

export default api;
