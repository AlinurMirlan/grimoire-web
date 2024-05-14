import axios from "axios";

export const httpClient = axios.create({
  baseURL: "http://13.59.130.149:8080",
  headers: {
    "Content-Type": "application/json",
  },
});
