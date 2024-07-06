// src/components/MovieCard.js
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  width: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  border-radius: 8px;
  width: 100%;
  height: auto;
`;

const Title = styled.h2`
  font-size: 18px;
  margin: 8px 0;
`;

const Text = styled.p`
  font-size: 14px;
  margin: 4px 0;
`;

const MovieCard = ({ movie }) => {
  const { title, poster_path, genre_ids = [], cast = [], director = '', overview = 'No description available' } = movie;

  return (
    <Card>
      <Image src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title} />
      <Title>{title}</Title>
      <Text>Genres: {genre_ids.join(', ')}</Text>
      <Text>Cast: {cast.join(', ')}</Text>
      <Text>Director: {director}</Text>
      <Text>{overview}</Text>
    </Card>
  );
};

export default MovieCard;
