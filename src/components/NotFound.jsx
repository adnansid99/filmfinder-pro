import notFoundLogo from "../assets/notFound.svg";

export default function NotFound() {
  return (
    <img
      style={{ width: "25rem", height: "100dvh" }}
      src={notFoundLogo}
      alt="Page Not Found"
    />
  );
}
