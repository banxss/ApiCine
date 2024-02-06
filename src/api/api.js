// api.js

import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = '3379290f4eee973b365721b92f8178bc';

const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';
const URL_IMAGE = 'https://image.tmdb.org/t/p/original/';

export const fetchMovies = async (searchKey) => {
  const type = searchKey ? 'search' : 'discover';
  const { data: { results } } = await axios.get(`${API_URL}/${type}/movie`, {
    params: {
      api_key: API_KEY,
      query: searchKey,
    },
  });

  return results;
};

export const fetchMovieDetails = async (id) => {
  const { data } = await axios.get(`${API_URL}/movie/${id}?language=es`, {
    params: {
      api_key: API_KEY,
      append_to_response: 'videos',
    },
  });

  return data;
};

export const fetchMoviesAndDetails = async (searchKey) => {
  const movies = await fetchMovies(searchKey);

  if (movies.length) {
    const movieDetails = await fetchMovieDetails(movies[0].id);
    return { movies, movieDetails };
  }

  return { movies, movieDetails: null };
};

export const constructImageUrl = (path) => `${IMAGE_PATH}${path}`;
export const constructFullImageUrl = (path) => `${URL_IMAGE}${path}`;
