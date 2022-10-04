import { createContext, useContext, useState } from "react";

import { fetchAllStoresReq, fetchStoreByIdReq } from "../api/stores.api";

export const StoresContext = createContext();

// return the context
export const useStores = () => {
  const context = useContext(StoresContext);
  if (context === undefined) {
    throw new Error("useContext must be used within a TaskContextProvider");
  }
  return context;
};

// context provider
export const StoresContextProvider = ({ children }) => {
  const [stores, setStores] = useState([]);

  async function fetchAllStores() {
    const response = await fetchAllStoresReq();
    setStores(response.data);
  }

  const fetchStoreById = async (id) => {
    try {
      const response = await fetchStoreByIdReq(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StoresContext.Provider
      value={{
        stores,
        fetchAllStores,
        fetchStoreById,
      }}
    >
      {children}
    </StoresContext.Provider>
  );
};
