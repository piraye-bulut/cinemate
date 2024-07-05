import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
export const Search = ({api}) => {
 const [SearchParams] = useSearchParams();
 const queryTerm= SearchParams.get("q");
 const {data: movies} = useFetch(api,queryTerm);
 useEffect(()=>{
  document.title="Search/Cinemate";

});
  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-left text-white">{movies.length === 0 ? `No results found for ${queryTerm}` : `Search results for ${queryTerm}`}</p>
      </section>
      
      <section className="max-w-7xl mx-auto py-7">
          <div className="flex w-full max-w justify-start flex-wrap ">
            {movies.map((movie)=> (
              <Card key={movie.id} movie={movie}/>

            ))}
            
     

        </div>
        </section>
    </main>
  )
}
