import React, { Fragment, useState } from 'react'

const Home = () => {
  const [movies, setMovies]=useState([])
  const [isLoading,setIsLoading]=useState(false);

 async function fetchMovieHandler() {
  setIsLoading(true)
 try {
    const res=  await fetch('https://swapi.dev/api/films/');
     const data=await res.json();
  const transformedData=data.results.map((movie)=> {
   return  {
     id: movie.episode_id,
    open: movie.opening_crawl

   };
  
 });
 setMovies(transformedData)
 setIsLoading(false)
 }  
 catch(error) { // Wrapped catch block in curly braces
  console.log("there is an error -", error);
}

 }
  return (
    <Fragment>
      <section>
        <button onClick={fetchMovieHandler}> Fetch Movies</button>
      </section>
      <section>
        <ul> 
        {  !isLoading && movies.length>0 && movies.map(movie=> <li>{movie.title}  {movie.id} {movie.open} </li>)}
        {  !isLoading && movies.length==0 && <p> No movies found</p>}
        { isLoading && <p> loading</p>}
        
        </ul>
      </section>
    </Fragment>
  )
}

export default Home
