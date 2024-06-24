import React, { createContext, useState, useEffect } from "react";

export const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  const [userQuery, setUserQuery] = useState("");
  const [selectButton, setSelectButton] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const BASE_URL = "http://localhost:9000";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(BASE_URL);

        if (!response.ok) {
          setError(`HTTP error! status: ${response.status}`);
          return;
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        setError("Unable to Fetch Data");
      }
    };

    fetchData();
  }, []);

  return (
    <FoodContext.Provider
      value={{
        userQuery,
        setUserQuery,
        selectButton,
        setSelectButton,
        data,
        error,
        BASE_URL,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};
