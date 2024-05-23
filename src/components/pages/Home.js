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
  const [tittle, setTittle]=useState('');
  const  [openingText, setOpenText]=useState('');
  const [releaseDate,setReleaseDate]=useState('');
  const [newObj, setNewObj]=useState([])
  const cancelRetryHandler = () => {
    console.log("cancel retry");
    setCancel(!cancel);
  };
  const fetchMovieHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch("https://swapi.dev/api/films/");
      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      const data = await res.json();

      setMovies(data.results);
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



  const transformedMovies = useMemo(() => {
    return (
      movies &&
      movies.map((movie) => {
        return {
          id: movie.episode_id,
          open: movie.opening_crawl,
        };
      })
    );
  }, [movies]);

  let content = <p>Something went wrong</p>;
  if (transformedMovies.length > 0) {
    content = transformedMovies.map((movie) => (
      <li key={movie.id}>
        {movie.open} {movie.id}
      </li>
    ));
  }
  if (transformedMovies.length === 0) {
    content = <p> No movies found </p>;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p> loading..</p>;
  }
  const movieSubmitHandler=(e)=> {
    e.preventDefault()
    const NewMovieObj= {tittle:tittle, openingText:openingText,releaseDate:releaseDate};
    setNewObj([...newObj,NewMovieObj]);
     console.log(newObj);
  }
  return (
    <Fragment>
      <section>
      <form> 
        <label htmlFor=""> Title</label>
        <input type='text' id='title' onChange={(e)=> 
           setTittle(e.target.value)
        } />  
        <label htmlFor="openText"> Opening Text</label>
       <input type="text" id="openText"  onChange={(e)=> 
           setOpenText(e.target.value)
        }/>
       <label htmlFor="releaseDate"> Release Date</label>
       <input type="date" id="releaseDate"  onChange={(e)=> 
           setReleaseDate(e.target.value)
        }/>
       <input type="submit"  onClick={movieSubmitHandler}/>

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
