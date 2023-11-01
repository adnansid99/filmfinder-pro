import { useContext, useState } from "react";
import { AppContext } from "./Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  const { setQuery, isError, isLoading, setlsLoading, setMovie } =
    useContext(AppContext);
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setlsLoading(true);
    setTimeout(() => {
      setQuery(input);
      setlsLoading(false);
      isError.msg != "Too many results." && setMovie([]);
    }, 1000);
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
      <div>
        {isError.show && isError.msg == "Incorrect IMDb ID."
          ? null
          : isError.msg}
      </div>
    </>
  );
}
