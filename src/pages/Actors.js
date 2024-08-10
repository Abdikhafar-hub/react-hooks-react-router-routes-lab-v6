import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    // Simulate fetching actors data
    const fetchActors = async () => {
      const actorData = [
        {
          name: "Leonardo DiCaprio",
          movies: ["Inception", "The Revenant", "Titanic"]
        },
        {
          name: "Tom Hanks",
          movies: ["Forrest Gump", "Cast Away", "Saving Private Ryan"]
        },
        {
          name: "Meryl Streep",
          movies: ["The Devil Wears Prada", "Mamma Mia!", "Sophie's Choice"]
        },
        // Add more actors as needed
      ];

      setActors(actorData);
    };

    fetchActors();
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actors.length > 0 ? (
          actors.map((actor, index) => (
            <article key={index}>
              <h2>{actor.name}</h2>
              <ul>
                {actor.movies.map((movie, movieIndex) => (
                  <li key={movieIndex}>{movie}</li>
                ))}
              </ul>
            </article>
          ))
        ) : (
          <p>No actors available</p>
        )}
      </main>
    </>
  );
}

export default Actors;
