import React, {
  Fragment,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cancel, setCancel] = useState(false);
  const [title, setTitle] = useState("");
  const [openingText, setOpenText] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  const cancelRetryHandler = () => {
    console.log("cancel retry");
    setCancel(!cancel);
  };
  const fetchMovieHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(
        "https://firstproject-3c465-default-rtdb.firebaseio.com/movies.json"
      );
      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      const data = await res.json();
      const loadedMovies = [];
      console.log("data above loaded movies", typeof(data));
      for (const key in data) {
        console.log("key", key)
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMovieHandler();
  }, []);
  useEffect(() => {
    if (error && !cancel) {
      const timer = setTimeout(() => {
        fetchMovieHandler();
      }, 500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [fetchMovieHandler, error, cancel]);

  let content = <p>Something went wrong</p>;
  if (movies.length > 0) {
    content = movies.map((movie) => <li key={movie.id}>{movie.title} {movie.openingText}
       <button onClick={ ()=> {
         movieRemoveHandler(movie.id)
       }}> Remove Movie</button>
    </li>);
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
  async function movieSubmitHandler(e) {
    e.preventDefault();
    const NewMovieObj = {
      title,
      openingText,
      releaseDate,
    };

    const response = await fetch(
      "https://firstproject-3c465-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(NewMovieObj),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log("data of firebase", data);
  }

  async function movieRemoveHandler(id) {
     try { 
     const res= await fetch(`https://firstproject-3c465-default-rtdb.firebaseio.com/movies/${id}.json`, {
      method:"delete"
    })
    const data = await res.json();
 

    setMovies(movies.filter(movie=> id!==movie.id));
  } catch(error) {
    setError(error.message);
  }

  }

  return (
    <Fragment>
      <section>
        <form onSubmit={movieSubmitHandler}>
          <label htmlFor=""> Title</label>
          <input
            type="text"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="openText"> Opening Text</label>
          <input
            type="text"
            id="openText"
            onChange={(e) => setOpenText(e.target.value)}
          />
          <label htmlFor="releaseDate"> Release Date</label>
          <input
            type="date"
            id="releaseDate"
            onChange={(e) => setReleaseDate(e.target.value)}
          />
          <input type="submit" />
        </form>
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
