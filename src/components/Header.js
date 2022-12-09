import React from "react";

// COMPONENT
import SearchBar from "./SearchBar";

export default function Header({
  setWantedMovies,
  viewWatchList,
  setViewWatchList,
  setIsLoading,
}) {
  return (
    <>
      <header className="flex flex-col items-center py-3 w-full">
        <h1
          className="py-2 text-2xl cursor-pointer font-bold"
          onClick={() => setViewWatchList(true)}
        >
          MyWatchList
        </h1>
        <SearchBar
          setWantedMovies={setWantedMovies}
          viewWatchList={viewWatchList}
          setViewWatchList={setViewWatchList}
          setIsLoading={setIsLoading}
        />
      </header>
    </>
  );
}
