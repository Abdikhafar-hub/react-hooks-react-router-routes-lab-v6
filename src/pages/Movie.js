import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
function Movie() {
  const { id } = useParams(); // Get the movie ID from the URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Simulate fetching movie details based on the id
    const fetchMovieDetails = async () => {
      const moviesData = [
        {
          id: "1",
          title: "Doctor Strange",
          time: "115 min",
          genres: ["Action", "Adventure", "Fantasy"],
        },
        {
          id: "2",
          title: "Inception",
          time: "148 min",
          genres: ["Action", "Sci-Fi", "Thriller"],
        },
        // Add more movies as needed
      ];

      // Find the movie by id
      const movieData = moviesData.find((movie) => movie.id === id);

      // Set the movie data into state
      setMovie(movieData);
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <h1>{movie.title}</h1> {/* Render the movie title */}
      <p>{movie.time}</p>
      <NavBar />
      <div>
        {movie.genres.map((genre, index) => (
          <span key={index}>{genre}</span>
        ))}
      </div>
    </div>
  );
}

export default Movie;
