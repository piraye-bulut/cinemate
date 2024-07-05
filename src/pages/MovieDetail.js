import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";

export const MovieDetail = () => {
  const params= useParams();
  const [movie, setMovie] = useState({});
  const image= movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : "https://via.placeholder.com/150";
  useEffect(()=>{
    document.title="MovieDetails/Cinemate";
  
  });

  useEffect(() =>{
    async function fetchMovie(){

      const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=9af2e26634e5d47cd3dc1f504df070cc`); 
      const json = await response.json();
      setMovie(json);
      console.log(json);
    }
    fetchMovie();

  } )

  
  return (
    <main>
      <section className="flex justify-around flex-wrap py-5">
        <div className="max-w-sm">
          <img className= "rounded" src={image} alt="{movie.title}" />
        </div>
        <div className="max-w-2xl  text-white">
          <h2 className="text-4xl font-bold my-3"> {movie.title}</h2>
          <p className="text-justify my-4">{movie.overview}</p>
         <p className=" my-7 flex flex-wrap gap-2 ">
          {movie.genres && movie.genres.map((genre) =>(
            <span key={genre.id} className="mr-2 border rounded border-white p-1 text-white">{genre.name}</span>
          ))} 
         </p>
          <p className="text-left text-xl my-4">Rating: {movie.vote_average}</p>
          
          <div class="flex items-center">
    <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <p class="ms-2 text-sm font-bold text-white dark:text-white">{movie.vote_average}</p>
    <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
    <a href="#" class="text-sm font-medium text-white ">{movie.vote_count} reviews </a>
</div>
<p className="my-4 text-left">
<span className="text-left text-xl font-bold my-4">Release Date:</span>
<span className="text-left text-xl my-4"> {movie.release_date}</span>
</p>
<p className="my-4 text-left">
<span className="text-left text-xl font-bold my-4">Runtime:</span>
<span className="text-left text-xl my-4"> {movie.runtime} minutes</span>
</p>
<p className="my-4 text-left">
<span className="text-left text-xl font-bold my-4">Budget:</span>
<span className="text-left text-xl my-4"> ${movie.budget}</span>
</p>

<p className="my-4 text-left">
<span className="text-left text-xl font-bold my-4">Revenue:</span>
<span className="text-left text-xl my-4"> ${movie.revenue}</span>

</p>
<p className="my-4 text-left">
<span className="text-left text-xl font-bold my-4">IMDB Code:</span>
<a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank" rel="noreferrer"> {movie.imdb_id}</a>
</p>
  </div> 
      </section>
    </main>
  )
}
