import React, { useEffect, useState } from "react";

// SVG
import SearchSVG from "./svg/SearchSVG";

// API
const API_KEY = "e2f26b8a15131d305684a880681e833f";

export default function SearchBar({
  setWantedMovies,
  viewWatchList,
  setViewWatchList,
  setIsLoading,
}) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    viewWatchList && setQuery("");
  }, [viewWatchList]);

  const handleSearchMovie = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=fr-EU&query=${query}`
      );
      const data = await res.json();
      setWantedMovies(data.results);
      setViewWatchList(false);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <form onSubmit={handleSearchMovie} className="flex items-center py-2 px-3">
      <input
        type="text"
        placeholder="Rechercher"
        name="query"
        value={query}
        onChange={changeHandler}
        className="w-25 rounded-md p-1 text-black "
      />
      <button
        type="submit"
        className="bg-secondary-color py-2 px-3 rounded-md ml-2"
        disabled={query === "" ? true : false}
      >
        <SearchSVG className="w-4" />
      </button>
    </form>
  );
}
