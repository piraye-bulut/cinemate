import { useEffect } from "react";
import {Link} from "react-router-dom";

export const PageNotFound = () => {
  useEffect(()=>{
    document.title="404 Page Not Found/Cinemate";
  
  });
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-white font-bold my-10 ">404,Ops Page Not Found</p>

        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
          <button className="w-64 text-xl text-black bg-emerald-500 rounded py-2">Back to Cinemate</button>
          </Link>
          

        </div>
      </section>
    </main>
  )
}
