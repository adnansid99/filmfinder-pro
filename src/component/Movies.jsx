import { useContext } from "react";
import { AppContext } from "./Context";
import { NavLink } from "react-router-dom";

export default function Movies() {
  const { movie } = useContext(AppContext);
  return (
    <>
      <section className="movie-page">
        {movie.map((data, index) => {
          const { imdbID, Title, Poster, Year } = data;
          return (
            <NavLink
              key={index}
              to={`movie/${imdbID}`}
              style={{ textDecoration: "none" }}
            >
              <div className="card">
                <div className="card-info">
                  <h2>{Title}</h2>
                  <p>{Year}</p>
                  <img src={Poster} alt="" />
                </div>
              </div>
            </NavLink>
          );
        })}
      </section>
    </>
  );
}
