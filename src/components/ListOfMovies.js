import React from "react";

// COMPONENT
import MovieContainer from "./MovieContainer";

export default function ListOfMovies({
  titleOfList,
  movies,
  myMoviesToWatch,
  setMyMoviesToWatch,
}) {
  return (
    <>
      <div className="w-full bg-secondary-color h-8 flex items-center justify-center">
        <h1 className="font-bold">{titleOfList}</h1>
      </div>
      {movies.length !== 0 ? (
        <div className="flex flex-wrap place-content-center">
          {movies.map((movieReq) => (
            <MovieContainer
              key={movieReq.id}
              {...movieReq}
              myMoviesToWatch={myMoviesToWatch}
              setMyMoviesToWatch={setMyMoviesToWatch}
            />
          ))}
        </div>
      ) : (
        <span className="flex items-center justify-center font-bold mt-5">
          Vous n'avez pas encore de film dans votre liste
        </span>
      )}
    </>
  );
}
