import React, {useEffect} from "react";

import { useCollections } from "../store/collectionsContext";

import { Card, Wrapper } from "../share";

const CollectionsScreen = () => {
  const { collections, fetchAllCollections } = useCollections();
  useEffect(() => {
    fetchAllCollections();
  }, [fetchAllCollections]);

  const renderCollections = () => {
    if (collections.length === 0) return <h1>No Trends Found!</h1>;
    return collections.map((collection) => (
      <Card
        key={collection._id}
        title={collection.title}
        description={collection.description}
        link={collection.link}
      />
    ));
  };

  return <Wrapper>{renderCollections()}</Wrapper>;
};

export default CollectionsScreen;
