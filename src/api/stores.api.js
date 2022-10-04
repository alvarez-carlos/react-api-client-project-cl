import axios from "axios";

export const fetchAllStoresReq = async () =>
  await axios.get("https://api-project-cl.vercel.app/stores");
  
export const fetchStoreByIdReq = async (id) =>
await axios.get(`https://api-project-cl.vercel.app/stores/${id}`);