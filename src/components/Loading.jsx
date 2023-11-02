import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Loading() {
  return (
    <div className="loadingInfo">
      <FontAwesomeIcon
        style={{
          color: "white",
          fontSize: "3rem",
        }}
        className="loadSpinner"
        icon={faSpinner}
      />
      <p>Getting Information :)</p>
    </div>
  );
}
