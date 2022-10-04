import axios from "axios";

export const fetchAllAboutsReq = async () =>
  await axios.get("https://api-project-cl.vercel.app/about");
  
export const fetchAboutByIdReq = async (id) =>
await axios.get(`https://api-project-cl.vercel.app/about/${id}`);