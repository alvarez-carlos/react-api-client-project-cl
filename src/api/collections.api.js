import axios from "axios";

export const fetchAllCollectionsReq = async () =>
  await axios.get("https://api-project-cl.vercel.app/collections");
  
export const fetchCollectionByIdReq = async (id) =>
await axios.get(`https://api-project-cl.vercel.app/collections/${id}`);