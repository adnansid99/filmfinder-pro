/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

const { VITE_OMDB_API } = import.meta.env;

const API_URL = `https://www.omdbapi.com/?apikey=${VITE_OMDB_API}&`;
const errorInit = {
  show: false,
  msg: null,
};

const AppContext = React.createContext();

const AppPrivider = ({ children }) => {
  const [isLoading, setlsLoading] = useState(false);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState(errorInit);
  const [query, setQuery] = useState("");
  // const [pageLoded, setPageLoded] = useState(0);
  // const [num, setNum] = useState(0);

  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.Response === "True") {
        setIsError(errorInit);
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
    setlsLoading(true);
    getMovies(API_URL + "s=" + query).then(() => setlsLoading(false));
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
