// src/components/MovieList.js
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import MovieCard from './MovieCard';
import GenreFilter from './GenreFilter';

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [year, setYear] = useState(2012);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovieDetails = async (movie) => {
    const detailsResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}`, {
      params: {
        api_key: '2dca580c2a14b55200e784d157207b4d',
        append_to_response: 'credits',
      },
    });
    const details = detailsResponse.data;
    return {
      ...movie,
      cast: details.credits.cast.slice(0, 5).map((actor) => actor.name), // Fetch top 5 cast members
      director: details.credits.crew.find((member) => member.job === 'Director')?.name || 'Unknown',
    };
  };

  const fetchMovies = useCallback(async (year, genres = []) => {
    setIsLoading(true);
    const response = await axios.get(`https://api.themoviedb.org/3/discover/movie`, {
      params: {
        api_key: '2dca580c2a14b55200e784d157207b4d',
        sort_by: 'popularity.desc',
        primary_release_year: year,
        with_genres: genres.join(','),
        vote_count: { gte: 100 },
        page: 1,
      },
    });
    const movieDetailsPromises = response.data.results.map(fetchMovieDetails);
    const moviesWithDetails = await Promise.all(movieDetailsPromises);
    setMovies(moviesWithDetails);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMovies(year, selectedGenres);
  }, [year, selectedGenres, fetchMovies]);

  const handleScroll = useCallback(() => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight && !isLoading) {
      setYear((prevYear) => prevYear + 1);
    } else if (document.documentElement.scrollTop === 0 && !isLoading) {
      setYear((prevYear) => prevYear - 1);
    }
  }, [isLoading]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleGenreChange = (genreId) => {
    setSelectedGenres((prevGenres) =>
      prevGenres.includes(genreId) ? prevGenres.filter((id) => id !== genreId) : [...prevGenres, genreId]
    );
  };

  return (
    <div>
      <GenreFilter selectedGenres={selectedGenres} onGenreChange={handleGenreChange} />
      <ListContainer>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ListContainer>
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default MovieList;
