import React, {useEffect} from "react";


import { useAbouts } from "../store/aboutsContext";

import { Card, Wrapper } from "../share";



const TipsAndGuidesScreen = () => {
  const { abouts, fetchAllAbouts } = useAbouts();

  useEffect(() => {
    fetchAllAbouts();
  }, [fetchAllAbouts]);

  const renderAbouts = () => {
    if (abouts.length === 0) return <h1>No Trends Found!</h1>;
    return abouts.map((about) => (
      <Card
        key={about._id}
        title={about.title}
        description={about.description}
        link={about.link}
      />
    ));
  };

  return <Wrapper>{renderAbouts()}</Wrapper>;
};

export default TipsAndGuidesScreen;
