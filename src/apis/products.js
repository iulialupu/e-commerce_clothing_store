import axios from "axios";
const API_URL = process.env.API_URL || "http://localhost:3001";

export default axios.create({
  baseURL: API_URL
});
