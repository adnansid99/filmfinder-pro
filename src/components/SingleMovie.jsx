import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "./Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Loading from "./Loading";
import Footer from "./Footer";

export default function SingleMovie() {
  const { id } = useParams();
  const [singleMovie, setSingleMovie] = useState({});
  const { API_URL, isLoading, setlsLoading } = useContext(AppContext);

  const getSingleMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.Response === "True") {
        setSingleMovie(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setlsLoading(true);
    getSingleMovies(API_URL + "i=" + id).then(() => setlsLoading(false));
  }, [id, API_URL, setlsLoading]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="singleMovie">
          <div className="leftDiv">
            <img src={singleMovie.Poster} alt="" />
          </div>
          <div className="rightDiv">
            <div className="div-1">
              <h1 className="title">{singleMovie.Title}</h1>
              <p>({singleMovie.Year})</p>
            </div>
            <div className="div-2">
              <p>{singleMovie.Rated}</p>
              <p>{singleMovie.Released}</p>
              <ul>
                <li>{singleMovie.Genre}</li>
                <li>{singleMovie.Runtime}</li>
              </ul>
            </div>
            <div className="div-3">
              <p>
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "yellow", marginRight: "0.2rem" }}
                />
                {singleMovie.imdbRating} ({singleMovie.imdbVotes})
              </p>
            </div>
            <div className="div-4">
              <h2>Plot:</h2>
              <p>{singleMovie.Plot}</p>
            </div>
            <div className="div-5">
              <div>
                <h4>Actors:</h4>
                <p>{singleMovie.Actors}</p>
              </div>
              <div>
                <h4>Writter:</h4>
                <p>{singleMovie.Writer}</p>
              </div>
              <div>
                <h4>Director:</h4>
                <p>{singleMovie.Director}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
