/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

const API_URL = "http://www.omdbapi.com/?apikey=b3fe7e54&";

const AppContext = React.createContext();

const AppPrivider = ({ children }) => {
  const [isLoading, setlsLoading] = useState(false);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({
    show: false,
    msg: null,
  });
  const [query, setQuery] = useState("");

  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.Response === "True") {
        setMovie(data.Search);
      } else {
        setIsError({
          show: true,
          msg: data.Error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies(API_URL + "s=" + query);
  }, [query]);

  const wareHouse = {
    API_URL,
    isLoading,
    setlsLoading,
    movie,
    setMovie,
    isError,
    query,
    setQuery,
  };

  return (
    <AppContext.Provider value={wareHouse}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppPrivider };
