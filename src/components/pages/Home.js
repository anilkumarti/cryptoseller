import React, { Fragment, useState } from 'react'

const Home = () => {
  const [movies, setMovies]=useState([])
 async function fetchMovieHandler() {
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
        { movies.map(movie=> <li>{movie.title}  {movie.id} {movie.open} </li>)}
        {console.log(movies)}
        </ul>
      </section>
    </Fragment>
  )
}

export default Home
