import { useEffect, useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Movie from "./components/Movie";
import FavMovie from "./components/FavMovie";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeMovie } from "./actions/favAction";
import { movies } from "./movies";


function App() {
  const [sira, setSira] = useState(0);
  // const favMovies = [];
  const favMovies = useSelector(state => state.favMovies);
  const dispatch = useDispatch();


  const favAddHandler = () => {
    if (sira < movies.length - 1) {
      const id = movies[sira].id;
      if (!favMovies.find(movie => movie.id === id)) {
        dispatch(addFav(movies[sira]));
        dispatch(removeMovie(id));
      }
      setSira(sira + 1);
    }
  }

  const öncekiFilm = () => {
    if (sira > 0) {
      setSira(sira - 1)
    }
  }
  const basaDon = () => {
    setSira(0);
  }
  function sonrakiFilm() {
    if (sira < movies.length - 1) {
      setSira(sira + 1);
    }

  };
  console.log(sira)

  return (
    <div className="wrapper max-w-2xl mx-auto">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink to="/" exact className="py-3 px-6 " activeClassName="bg-white shadow-sm text-blue-600">
          Filmler
        </NavLink>
        <NavLink to="/listem" className="py-3 px-6 " activeClassName="bg-white shadow-sm text-blue-600">
          Listem
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <Movie sira={sira} />

          <div className="flex gap-3 justify-end py-3">
            <button
              onClick={basaDon}
              className="select-none px-4 py-2 border bg-red-700 border-red-700 text-white hover:border-white-500 hover:bg-red-500"
            > Başa Dön </button>
            {sira !== 0 && (
              <button
                onClick={öncekiFilm}
                className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
              >
                Önceki
              </button>
            )}
            {sira !== movies.length - 1 && (
              <button
                onClick={sonrakiFilm}
                className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
              >
                Sıradaki
              </button>
            )}
            <button onClick={favAddHandler} className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white">
              Listeme ekle
            </button>
          </div>
        </Route>

        <Route path="/listem">
          <div>
            {favMovies.map((movie) => (
              <FavMovie key={movie.id} title={movie.title} id={movie.id} />
            ))}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
