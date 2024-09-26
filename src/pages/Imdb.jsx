import { useState } from "react";
import { movies } from "../utils/Data";
import { useEffect } from "react";
import Card from "../Components/Card";

function Imdb() {
  const [count, setCount] = useState(0);
  const [url, setUrl] = useState("https://imdb-top-100-movies.rapidapi.com");
  const [data, setData] = useState([]);

  return (
    <>
      <section className="bg-[#181b22] grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 h-fit gap-4 p-5 py-10">
        {movies.map((it) => (
          <>
            {/* {it.key} */}
            <Card data={it} />
          </>
        ))}
      </section>
    </>
  );
}

export default Imdb;
