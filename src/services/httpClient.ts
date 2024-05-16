import axios from "axios";

export const httpClient = axios.create({
  baseURL: "http://3.129.73.197",
  headers: {
    "Content-Type": "application/json",
  },
});
