import { useState, useEffect } from "react";

// COMPONENTS
import Header from "./components/Header";
import ListOfMovies from "./components/ListOfMovies";

const getLocalMyMoviesToWatch = () => {
  let myMoviesToWatch = localStorage.getItem("myMoviesToWatch");

  if (myMoviesToWatch) {
    return JSON.parse(localStorage.getItem("myMoviesToWatch"));
  } else {
    return [];
  }
};

export default function App() {
  const [wantedMovies, setWantedMovies] = useState([]);
  const [viewWatchList, setViewWatchList] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [myMoviesToWatch, setMyMoviesToWatch] = useState(
    getLocalMyMoviesToWatch()
  );

  useEffect(() => {
    localStorage.setItem("myMoviesToWatch", JSON.stringify(myMoviesToWatch));
  }, [myMoviesToWatch]);

  let titleOfList = viewWatchList
    ? "Ma liste de films à voir"
    : "Résultat de la recherche";

  return (
    <>
      <div className="flex-col bg-primary-color min-h-screen h-full text-white">
        <Header
          setWantedMovies={setWantedMovies}
          viewWatchList={viewWatchList}
          setViewWatchList={setViewWatchList}
          setIsLoading={setIsLoading}
        />
        {isLoading ? (
          <button
            type="button"
            className="bg-secondary-color w-full h-8 flex items-center justify-center"
            disabled
          >
            Chargement...
          </button>
        ) : (
          <ListOfMovies
            titleOfList={titleOfList}
            movies={viewWatchList ? myMoviesToWatch : wantedMovies}
            myMoviesToWatch={myMoviesToWatch}
            setMyMoviesToWatch={setMyMoviesToWatch}
          />
        )}
      </div>
    </>
  );
}
