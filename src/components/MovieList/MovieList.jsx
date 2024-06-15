import { useState, useEffect } from "react";
import axios from "axios";

const { VITE_API_URL } = import.meta.env;

export default function MoviesList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await axios.get(`${VITE_API_URL}/movies/`);
      setMovies(data);
    };
    fetchMovies();
  }, []);

  const elements = movies.map(({ id, title, director }) => (
    <li key={id}>
      Title: {title}. Director: {director}.
    </li>
  ));

  return <ul>{elements}</ul>;
}
