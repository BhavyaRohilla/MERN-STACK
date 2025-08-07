import NavBar from "./components/Navbar";
import Search from "./components/Search";
import NumResults from "./components/NumResults";
import Main from "./components/Main";
import Box from "./components/Box";
import MoviesList from "./components/MoviesList";
import WatchedMoviesList from "./components/WatchedMoviesList";
import WatchedSummary from "./components/WatchedSummary";
import { useState } from "react";
import { tempMovieData, tempWatchedData } from "./store/movieData";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  return (
    <>
      <NavBar>
        <Search />
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        {/* 
        <Box children={<MoviesList movies={movies} />} />
        <Box
          children={
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList watched={watched} />
            </>
          }
        /> */}

        <Box>
          <MoviesList movies={movies} />
        </Box>

        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMoviesList watched={watched} />
        </Box>
      </Main>
    </>
  );
}
