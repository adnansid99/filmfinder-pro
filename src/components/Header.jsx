import { useContext } from "react";
import { AppContext } from "./Context";

export default function Header() {
  const { movie } = useContext(AppContext);

  const handleClick = () => {
    location.reload();
  };
  return (
    <h1
      style={
        movie.length === 0 ? { marginTop: "35vh" } : { transition: "0.6s" }
      }
      className="header"
      onClick={handleClick}
    >
      FilmFinderPro
    </h1>
  );
}
