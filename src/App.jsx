import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { MovieFile } from "./components/movie/MovieFile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<MovieFile />} />
      </Routes>
    </Router>
  );
};
export default App;
