import axios from "axios";

export const httpClient = axios.create({
  baseURL: "http://3.135.191.83",
  headers: {
    "Content-Type": "application/json",
  },
});
