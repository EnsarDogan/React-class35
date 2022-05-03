import { useState, useEffect } from "react";
const UseMyDataFetching = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    const data = await response.json();
    setData(data);
    setIsLoading(false);
  };
  
  useEffect(() => {
    getData();
  }, []);
  return { data, isLoading };
};

export default UseMyDataFetching;
