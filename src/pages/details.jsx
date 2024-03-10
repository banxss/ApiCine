import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { setFavoriteMovie } from '../redux/slices/favoritemovie/favoriteMovieSlice';  // Importa la acción para establecer la película favorita
import * as api from '../api/api';

const MainPelis = () => {
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({ title: 'Loading Movies' });
  const [favorites, setFavorites] = useState([]);
  const { counter } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const fetchMovies = async (searchKey) => {
    const { movies, movieDetails } = await api.fetchMoviesAndDetails(searchKey);

    setMovies(movies);
    setMovie(movies[0]);

    if (movieDetails) {
      const trailer = movieDetails.videos.results.find((vid) => vid.type === 'Trailer');
      setTrailer(trailer || movieDetails.videos.results[0]);
      setMovie(movieDetails);
    }
  };

  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(searchKey);
  };

  const selectMovie = async (selectedMovie) => {
    const movieDetails = await api.fetchMovieDetails(selectedMovie.id);
    setMovie(movieDetails);
    setTrailer(null); // Resetear el trailer al seleccionar una nueva película
    dispatch(setFavoriteMovie(movieDetails.title)); // Guardar la película seleccionada como favorita en el estado global de Redux
    window.scrollTo(0, 0);
  };

  const playTrailer = () => {
    setTrailer(movie.videos.results.find((vid) => vid.type === 'Trailer') || movie.videos.results[0]);
  };

  const closeTrailer = () => {
    setTrailer(null);
  };

  const addToFavorites = () => {
    let newFavorites;
    if (favorites.includes(movie.title)) {
      newFavorites = favorites.filter(title => title !== movie.title);
    } else {
      newFavorites = [...favorites, movie.title];
    }
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  useEffect(() => {
    fetchMovies();
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
    if (storedFavorites) {
      setFavorites(storedFavorites);
    }
  }, []);

  return (
    <main className="bg-blue-900/55 min-h-screen">
      <div className="container mx-auto py-8">
        <form className="mb-4" onSubmit={searchMovies}>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setSearchKey(e.target.value)}
              className="border border-gray-300 p-2 flex-grow"
            />
            <button type="submit" className="bg-blue-700 text-white p-2 ml-2">
              Buscar
            </button>
          </div>
        </form>

        <div className="relative">
          {movie ? (
            <div
              className="viewtrailer bg-cover bg-center h-96 relative rounded-lg "
              style={{ backgroundImage: `url("${api.constructImageUrl(movie.backdrop_path)}")` }}
            >
              {trailer ? (
                <>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <YouTube
                      videoId={trailer.key}
                      className="w-full h-full"
                      containerClassName="youtube-container"
                      opts={{
                        width: '100%',
                        height: '100%',
                        playerVars: {
                          autoplay: 1,
                          controls: 1,
                          cc_load_policy: 0,
                          fs: 0,
                          iv_load_policy: 0,
                          modestbranding: 0,
                          rel: 0,
                          showinfo: 0,
                        },
                      }}
                    />
                  </div>
                  <button
                    onClick={closeTrailer}
                    className="absolute bottom-0 left-0 right-0 bg-red-500/80 text-white p-2 text-center"
                  >
                    Cerrar Trailer
                  </button>
                </>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-end p-8">
                  <h1 className="text-white text-3xl mb-4 font-medium bg-black/50 ">{movie.title}</h1>
                  <p className="text-white text-lg mb-8 font-medium bg-black/50">{movie.overview}</p>
                  <p className="text-white text-lg mb-8 font-medium bg-black/50"> Estreno :{movie.release_date} <br></br>Titulo original: {movie.original_title}<br></br>Identificador en IMDB: {movie.imdb_id} </p>

                  <div>
                    {movie.videos && movie.videos.results ? (
                      <button
                        className="boton bg-blue-700 text-white p-2 text-center"
                        onClick={playTrailer}
                        type="button"
                      >
                        Reproducir Trailer
                      </button>
                    ) : (
                      'Lo siento, no hay trailer disponible'
                    )}
                  </div>
                  <br></br>
                  <div className="flex">
                    <button
                      className={`boton ${favorites.includes(movie.title) ? 'bg-green-500' : 'bg-blue-700'} text-white p-2 text-center mr-4`}
                      onClick={addToFavorites}
                      type="button"
                    >
                      {favorites.includes(movie.title) ? 'Favorita' : 'Marcar como favorita♡'}
                    </button>
                    <button
                      className="boton bg-blue-700 text-white p-2 text-center"
                      type="button"
                    >
                      <Link
                        className="flex items-center "
                        to="/comprarentrada"
                      >
                        Comprar entrada
                      </Link>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : null}
        </div>

        <div className="container mt-3 flex justify-center">
          <div className="flex flex-wrap">
            {movies.map((movie) => (
              <div key={movie.id} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4" onClick={() => selectMovie(movie)}>
                <img
                  src={api.constructFullImageUrl(movie.poster_path)}
                  alt=""
                  className="w-full h-auto rounded-lg transition transform hover:scale-105"
                />
                <h4 className="text-center text-white text-xl bg-blue-700 p-2 rounded-b-lg">
                  {movie.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainPelis;
