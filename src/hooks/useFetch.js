/*
import { useState } from "react";
import { useEffect } from "react";

export const useFetch = (api, queryTerm="") => {
    const [data, setData] =useState([]);
    const url=`https://api.themoviedb.org/3/${api}?api_key=9af2e26634e5d47cd3dc1f504df070cc&query=${queryTerm}`;
    
    useEffect(() =>{
        async function fetchMovies(){
          const response = await fetch(url);
          const json = await response.json();
          setData(json.results);
    
        }
        fetchMovies();
      }, [url])
  return {data}
}
*/
import { useState, useEffect } from "react";



export const useFetch = (api, queryTerm = "") => {
  const [data, setData] = useState([]);
  let url = `https://api.themoviedb.org/3/`;

  switch (api) {
    case "movie/now_playing":
      url += `movie/now_playing?api_key=9af2e26634e5d47cd3dc1f504df070cc`;
      break;
    case "movie/popular":
      url += `discover/movie?api_key=9af2e26634e5d47cd3dc1f504df070cc&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
      break;
    case "movie/top_rated":
      url += `movie/top_rated?api_key=9af2e26634e5d47cd3dc1f504df070cc`;
      break;
    case "movie/upcoming":
      url += `movie/upcoming?api_key=9af2e26634e5d47cd3dc1f504df070cc`;
      break;
    case "search/movie":
      url += `search/movie?api_key=9af2e26634e5d47cd3dc1f504df070cc&query=${queryTerm}`;
      break;
    default:
      break;
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results || []);
    }
    fetchData();
  }, [url]);

  return { data };
};