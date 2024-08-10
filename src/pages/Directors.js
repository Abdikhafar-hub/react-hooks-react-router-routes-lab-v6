import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    // Simulate fetching directors data
    const fetchDirectors = async () => {
      const directorData = [
        {
          name: "Christopher Nolan",
          movies: ["Inception", "The Dark Knight", "Interstellar"]
        },
        {
          name: "Steven Spielberg",
          movies: ["Jurassic Park", "E.T.", "Schindler's List"]
        },
        {
          name: "Quentin Tarantino",
          movies: ["Pulp Fiction", "Kill Bill", "Django Unchained"]
        },
        // Add more directors as needed
      ];

      setDirectors(directorData);
    };

    fetchDirectors();
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directors.length > 0 ? (
          directors.map((director, index) => (
            <article key={index}>
              <h2>{director.name}</h2>
              <ul>
                {director.movies.map((movie, movieIndex) => (
                  <li key={movieIndex}>{movie}</li>
                ))}
              </ul>
            </article>
          ))
        ) : (
          <p>No directors available</p>
        )}
      </main>
    </>
  );
}

export default Directors;
