import axios from "axios";

export const httpClient = axios.create({
  baseURL: "http://18.226.98.56",
  headers: {
    "Content-Type": "application/json",
  },
});
