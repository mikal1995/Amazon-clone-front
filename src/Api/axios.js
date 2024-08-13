import axios from "axios";

const axiosInstance = axios.create({
  // local
  //  baseURL: "http://127.0.0.1:5001/clone-bf3c1/us-central1/api",

  // on render.com
  baseURL: "https://amazon-api-hqza.onrender.com",
});

export { axiosInstance };
