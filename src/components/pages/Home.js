import React, { Fragment, useEffect, useState, useCallback } from "react";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cancel,setCancel]=useState(false);
   const cancelRetryHandler=()=> {
    console.log("cancel retry")
     setCancel(!cancel);
   }
  const fetchMovieHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch("https://swapi.dev/api/film/");
      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      const data = await res.json();
      const transformedData = data.results.map((movie) => {
        return {
          id: movie.episode_id,
          open: movie.opening_crawl,
        };
      });
      setMovies(transformedData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);
  useEffect(() => {
     if(error && !cancel) {
      const timer=setTimeout(() => {
      
        fetchMovieHandler();
         
      }, 100);
  
      return ()=> {
         clearTimeout(timer)
      }
     }
  }, [fetchMovieHandler,error,cancel]);

  let content = <p>Something went wrong</p>;
  if (movies.length > 0) {
    content = movies.map((movie) => (
      <li>
        {movie.title} {movie.id} 
      </li>
    ));
  }
  if (movies.length === 0) {
    content = <p> No movies found </p>;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p> loading..</p>;
  }

  return (
    <Fragment>
      <section>
        <button onClick={fetchMovieHandler}> Fetch Movies</button>
        <button onClick={cancelRetryHandler}> Cancel Retry</button>
      </section>
      <section>
        <ul>{content}</ul>
      </section>
    </Fragment>
  );
};

export default Home;
