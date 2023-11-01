import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import SingleMovie from "./SingleMovie";
import NotFound from "./NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      {/* <Route path="/movies" element={<Movies />}></Route> */}
      <Route path="/movie/:id" element={<SingleMovie />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}
