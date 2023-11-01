import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "./Context";

export default function SingleMovie() {
  const { id } = useParams();
  const [singleMovie, setSingleMovie] = useState({});
  const { API_URL } = useContext(AppContext);

  const getSingleMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.Response === "True") {
        setSingleMovie(data);
      }
      // } else {
      //   setIsError({
      //     show: true,
      //     msg: data.Error,
      //   });
      // }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleMovies(API_URL + "i=" + id);
  }, [id, API_URL]);

  return <h1>{singleMovie.Title}</h1>;
}
