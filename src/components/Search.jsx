import { useContext, useState } from "react";
import { AppContext } from "./Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import notFoundLogo from "../assets/notFound.svg";

export default function Search() {
  const { setQuery, isError, isLoading } = useContext(AppContext);
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(input);
  };

  return (
    <>
      <form className="searchSumbit" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          className="searchBox"
          type="text"
          placeholder="Type movie name here..."
        />
        <button type="submit">
          {isLoading ? (
            <FontAwesomeIcon className="loadSpinner" icon={faSpinner} />
          ) : (
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          )}
        </button>
      </form>
      <div style={{ color: "white" }}>
        {isError.show === true ? (
          isError.msg === "Incorrect IMDb ID." ? null : isError.msg ===
            "Too many results." ? (
            isError.msg
          ) : (
            <img
              style={{ width: "100px" }}
              src={notFoundLogo}
              alt="Movie not found."
            />
          )
        ) : null}
      </div>
    </>
  );
}
