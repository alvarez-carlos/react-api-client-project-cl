import { createContext, useContext, useState } from "react";

import { fetchAllAboutsReq, fetchAboutByIdReq } from "../api/abouts.api";

export const AboutsContext = createContext();

// return the context
export const useAbouts = () => {
  const context = useContext(AboutsContext);
  if (context === undefined) {
    throw new Error("useContext must be used within a TaskContextProvider");
  }
  return context;
};


// context provider
export const AboutsContextProvider = ({ children }) => {
  const [abouts, setAbouts] = useState([]);

  async function fetchAllAbouts() {
    const response = await fetchAllAboutsReq();
    setAbouts(response.data);
  }

  const fetchAboutById = async (id) => {
    try {
      const response = await fetchAboutByIdReq(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AboutsContext.Provider
      value={{
        abouts,
        fetchAllAbouts,
        fetchAboutById,
      }}
    >
      {children}
    </AboutsContext.Provider>
  );
};
