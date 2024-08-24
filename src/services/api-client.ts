import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: { key: "30acfabe27d7423b9b1fb0f6f1e23394" },
});

export default apiClient;
