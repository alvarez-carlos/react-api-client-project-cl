import { createContext, useContext, useState } from "react";

import { fetchAllTrendsReq, fetchTrendByIdReq } from "../api/trends.api";

export const TrendsContext = createContext();

// return the context
export const useTrends = () => {
  const context = useContext(TrendsContext);
  if (context === undefined) {
    throw new Error("useContext must be used within a TaskContextProvider");
  }
  return context;
};

// context provider
export const TrendsContextProvider = ({ children }) => {
  const [trends, setTrends] = useState([]);

  async function fetchAllTrends() {
    const response = await fetchAllTrendsReq();
    setTrends(response.data);
  }

  const fetchTrendById = async (id) => {
    try {
      const response = await fetchTrendByIdReq(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TrendsContext.Provider
      value={{
        trends,
        fetchAllTrends,
        fetchTrendById,
      }}
    >
      {children}
    </TrendsContext.Provider>
  );
};
