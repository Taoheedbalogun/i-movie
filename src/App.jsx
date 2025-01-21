import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { MovieFile } from "./components/movie/MovieFile";
import { MovieDetails } from "./components/movieDetails/MovieDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<MovieFile />} />
        <Route path="/details/:id" exact element={<MovieDetails />} />
      </Routes>
    </Router>
  );
};
export default App;
