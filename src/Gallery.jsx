import { useQuery } from '@tanstack/react-query';
import React from 'react';
import axios from 'axios';
import { useGlobalContext } from './context';

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;
// console.log(import.meta.env.VITE_API_KEY);
// const url = `https://api.unsplash.com/search/photos?client_id=_hptZPRynWajDGpTatIzTcC3wM9b4xMNdZJcMIixIko`;
const Gallery = () => {
  const { searchTerm } = useGlobalContext();
  const responce = useQuery({
    queryKey: ['images', searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);
      return result.data;
    },
  });
  // console.log(responce);
  if (responce.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }
  if (responce.isError) {
    return (
      <section className="image-container">
        <h4>There was an error...</h4>
      </section>
    );
  }
  const results = responce.data.results;
  if (results.length < 1) {
    if (responce.isError) {
      return (
        <section className="image-container">
          <h4>No results found...</h4>
        </section>
      );
    }
  }
  return (
    <section className="image-container">
      {results.map(item => {
        const url = item?.urls?.regular;
        return (
          <img
            src={url}
            key={item.id}
            alt={item.alt_description}
            className="img"
          />
        );
      })}
    </section>
  );
};

export default Gallery;
