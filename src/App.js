import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchPage from "./components/SearchPage";
import MovieDetail from "./components/MovieDetail";
import Scratch from "../src/Scratch";

const main = true;

export default function App() {
  return (
    <div>
      {main ? (
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <SearchPage />
            </Route>
            <Route path="/movie/:id">
              <MovieDetail />
            </Route>
          </Switch>
        </div>
      ) : (
        <Scratch />
      )}
    </div>
  );
}
