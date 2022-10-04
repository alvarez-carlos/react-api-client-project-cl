import { createContext, useContext, useState } from "react";

import { fetchAllCollectionsReq, fetchCollectionByIdReq } from "../api/collections.api";

export const CollectionsContext = createContext();

// return the context
export const useCollections = () => {
  const context = useContext(CollectionsContext);
  if (context === undefined) {
    throw new Error("useContext must be used within a TaskContextProvider");
  }
  return context;
};

// context provider
export const CollectionsContextProvider = ({ children }) => {
  const [collections, setCollections] = useState([]);

  const fetchAllCollections = async () => {
    const response = await fetchAllCollectionsReq();
    setCollections(response.data);
  }

  const fetchCollectionById = async (id) => {
    try {
      const response = await fetchCollectionByIdReq(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CollectionsContext.Provider
      value={{
        collections,
        fetchAllCollections,
        fetchCollectionById,
      }}
    >
      {children}
    </CollectionsContext.Provider>
  );
};
