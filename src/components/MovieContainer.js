import React, { useEffect, useState } from "react";

// PNG
import noImagePlaceholder from "../picture/No-Image-Placeholder.png";

// API
const API_IMG = "https://image.tmdb.org/t/p/w200/";

export default function MovieContainer({
  id,
  title,
  poster_path,
  myMoviesToWatch,
  setMyMoviesToWatch,
}) {
  const activeMovie = { id, title, poster_path };
  const [isInWatchList, setIsInWatchList] = useState(false);

  useEffect(() => {
    let isInWatchListMovies = false;

    for (const movie in myMoviesToWatch) {
      if (activeMovie.id === myMoviesToWatch[movie].id) {
        isInWatchListMovies = true;
      }
    }
    setIsInWatchList(isInWatchListMovies);
  }, [myMoviesToWatch, activeMovie.id]);

  const handleAddMovie = () => {
    if (!isInWatchList) {
      setMyMoviesToWatch([...myMoviesToWatch, activeMovie]);
    }
  };

  const handleRemoveMovie = () => {
    const updateMyMoviesToWatch = myMoviesToWatch.filter((movie) => {
      return movie.id !== activeMovie.id;
    });
    setMyMoviesToWatch(updateMyMoviesToWatch);
  };

  return (
    <div className="flex flex-col items-center w-40 mx-2.5 my-2.5">
      <h3 className="overflow-hidden truncate w-40 mb-2 h-8">
        {activeMovie.title}
      </h3>
      <img
        src={
          activeMovie.poster_path !== null
            ? API_IMG + activeMovie.poster_path
            : noImagePlaceholder
        }
        className={`rounded-md h-full delay-50 duration-100 ease-in-out hover:rotate-2`}
        alt="movie"
      />
      <button
        onClick={!isInWatchList ? handleAddMovie : handleRemoveMovie}
        className="text-sm bg-secondary-color px-5 mt-2 rounded-md text-white py-1 w-40"
      >
        {!isInWatchList ? "Ajouter" : "Retirer"}
      </button>
    </div>
  );
}
