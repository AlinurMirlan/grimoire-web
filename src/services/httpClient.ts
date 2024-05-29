import axios from "axios";

export const httpClient = axios.create({
  baseURL: "http://3.141.42.3",
  headers: {
    "Content-Type": "application/json",
  },
});
