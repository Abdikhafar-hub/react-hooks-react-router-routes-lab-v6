import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  // State to hold movie data
  const [movies, setMovies] = useState([]);

  // Fetch or simulate fetching movie data
  useEffect(() => {
    const fetchMovies = async () => {
      // Simulate movie data
      const movieData = [
        { id: 1, title: "Inception" },
        { id: 2, title: "The Dark Knight" },
        { id: 3, title: "Interstellar" },
        // Add more movies as needed
      ];
      setMovies(movieData);
    };

    fetchMovies();
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        <section>
          {movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard key={movie.id} title={movie.title} id={movie.id} />
            ))
          ) : (
            <p>No movies available</p>
          )}
        </section>
      </main>
    </>
  );
}

export default Home;
