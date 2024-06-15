import { useState, useEffect } from "react";
import axios from "axios";

export default function MoviesList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await axios.get("http://localhost:3000/api/movies/");
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
