import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { setFavoriteMovie } from '../redux/slices/favoritemovie/favoriteMovieSlice';
import * as api from '../api/api';

const MainPelis = () => {
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({ title: 'Loading Movies' });
  const [favorites, setFavorites] = useState([]);
  const { counter } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const { movies, movieDetails } = await api.fetchMoviesAndDetails(searchKey);
      setMovies(movies);
      setMovie(movies[0]);

      if (movieDetails) {
        const trailer = movieDetails.videos.results.find((vid) => vid.type === 'Trailer');
        setTrailer(trailer || movieDetails.videos.results[0]);
        setMovie(movieDetails);
      }
    };

    fetchData();
  }, [searchKey]);

  const selectMovie = async (selectedMovie) => {
    const movieDetails = await api.fetchMovieDetails(selectedMovie.id);
    setMovie(movieDetails);
    setTrailer(null);
    dispatch(setFavoriteMovie(movieDetails.title));
    window.scrollTo(0, 0);
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

  return (
    <main className="bg-blue-900/55 min-h-screen ">
      <div className="container mx-auto py-8">
        <div className="container mt-3 text-center bg-black/50">
          <h2  className="text-white text-3xl">Bienvenidos a Cinefull, tu destino para la mejor experiencia de compra de entradas.</h2>
          
          <p className="text-white text-lg">
            El cine físico, con su encanto atemporal y su rica historia, sigue siendo un
            refugio para los amantes del séptimo arte. Desde los imponentes palacios de cine hasta las acogedoras
            salas independientes, cada experiencia de película ofrece una oportunidad única de sumergirse en mundos imaginarios
            y conectar con emociones profundas. En estos espacios, la magia del cine cobra vida en pantalla grande, envolviendo
            a los espectadores en una experiencia sensorial incomparable. Además, la historia del cine, con sus iconos legendarios,
            innovaciones técnicas y momentos emblemáticos, añade una capa adicional de fascinación a cada proyección. Asistir a una
            función en un cine físico no es solo ver una película, es participar en una tradición cultural arraigada y celebrar la
            pasión compartida por el arte cinematográfico..</p>
            <br />
            <p  className="text-white text-sm">“A veces los viernes Amelie va al cine. Me gusta mirar hacia atrás en la oscuridad y ver la cara de los espectadores. También me gusta descubrir los detalles que nadie más ve. En cambio odio las viejas películas cuando el que conduce nunca mira a la carretera.”
AUDREY TAUTOU - Amelie Poulain</p>
        </div>
        <br /><br />

        <div className="container mt-1 flex justify-center">
          <div className="overflow-x-auto whitespace-nowrap">
            {movies.map((movie) => (
              <div key={movie.id} className="inline-block mr-4 p-4 border rounded-lg cursor-pointer hover:bg-gray-800" onClick={() => selectMovie(movie)}>
                <img
                  src={api.constructFullImageUrl(movie.poster_path)}
                  alt={movie.title}
                  className="w-48 h-auto rounded-lg"
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
