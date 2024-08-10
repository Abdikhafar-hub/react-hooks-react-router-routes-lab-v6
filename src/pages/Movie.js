import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Simulate fetching movie details based on the id
    const fetchMovieDetails = async () => {
      // Example movie data; replace this with an actual fetch call to your API
      const movieData = {
        id,
        title: "Inception",
        time: "148 min",
        genres: ["Action", "Sci-Fi", "Thriller"],
      };

      // Set the fetched movie data into state
      setMovie(movieData);
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      <div>
        {movie.genres.map((genre, index) => (
          <span key={index}>{genre}</span>
        ))}
      </div>
    </div>
  );
}

export default Movie;
