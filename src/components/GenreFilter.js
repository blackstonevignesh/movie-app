// src/components/GenreFilter.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const GenreContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 16px 0;
`;

const GenreButton = styled.button`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: ${props => (props.selected ? '#007BFF' : '#FFF')};
  color: ${props => (props.selected ? '#FFF' : '#000')};
  cursor: pointer;
  &:hover {
    background: ${props => (props.selected ? '#0056b3' : '#f1f1f1')};
  }
`;

const GenreFilter = ({ selectedGenres, onGenreChange }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list', {
        params: {
          api_key: '2dca580c2a14b55200e784d157207b4d',
        },
      });
      setGenres(response.data.genres);
    };

    fetchGenres();
  }, []);

  const handleGenreClick = (genre) => {
    onGenreChange(genre.id);
  };

  return (
    <GenreContainer>
      {genres.map((genre) => (
        <GenreButton
          key={genre.id}
          selected={selectedGenres.includes(genre.id)}
          onClick={() => handleGenreClick(genre)}
        >
          {genre.name}
        </GenreButton>
      ))}
    </GenreContainer>
  );
};

export default GenreFilter;
