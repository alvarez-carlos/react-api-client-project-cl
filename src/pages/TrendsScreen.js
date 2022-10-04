import React, { useEffect } from "react";

import { useTrends } from "../store/trendsContext";

import { Card, Wrapper } from "../share";

const TrendsScreen = () => {
  const { trends, fetchAllTrends } = useTrends();

  useEffect(() => {
    fetchAllTrends();
  }, []);

  const renderTrends = () => {
    if (trends.length === 0) return <h1>No Trends Found!</h1>;
    return trends.map((trend) => <Card key={trend._id} title={trend.title} description={trend.description} link={trend.link} />);
  };

  return <Wrapper>{renderTrends()}</Wrapper>;
};

export default TrendsScreen;
