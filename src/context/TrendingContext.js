import { createContext, useLayoutEffect, useState } from "react";

// create context object
export const TrendingContext = createContext({});

// create the provider component
export const TrendingProvider = ({ children }) => {
  const [trendingData, setTrendingData] = useState();

  const getTrendingData = async () => {
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/search/trending`
      )
        .then((res) => res.json())
        .then((json) => json);
      // console.log("Trending", data);
      setTrendingData(data.coins);
    } catch (error) {
      console.log(error);
    }
  };

  const resetTrendingResult = () => {
    getTrendingData();
  };

  useLayoutEffect(() => {
    getTrendingData();
  }, []);

  return (
    <TrendingContext.Provider value={{ trendingData, resetTrendingResult }}>
      {children}
    </TrendingContext.Provider>
  );
};
