import axios from "axios";

export const fetchAllTrendsReq = async () =>
  await axios.get("https://api-project-cl.vercel.app/trends");
  
export const fetchTrendByIdReq = async (id) =>
await axios.get(`https://api-project-cl.vercel.app/trends/${id}`);