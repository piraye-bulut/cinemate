
import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";

export const MovieList = ({api}) => {
  useEffect(()=>{
    document.title="MovieList/Cinemate";
  
  });

 const {data: movies} = useFetch(api);
 if (!movies) {
  // movies henüz yüklenmediyse bir yükleme göstergesi veya mesaj döndür
  return <div>Loading...</div>;
}
  return (
    <main>
      
        <section className="max-w-7xl mx-auto py-7">
          <div className="flex w-full max-w justify-start flex-wrap other:justify-evenly">
            {movies.map((movie)=> (
              <Card key={movie.id} movie={movie}/>

            ))}
            
     

        </div>
        </section>
    </main>
  )
}
