import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GifState } from "../context/gif-context";
import FilterGif from "../components/FilterGif";
import Gif from "../components/gif";

const Search = () => {
  const { gf, filter } = GifState();

  const [result, setResult] = useState([]);
  const { query } = useParams();

  const fetchSearchResults = async () => {
    const { data } = await gf.search(query, {
      sort: "relevant",
      lang: "en",
      type: filter,
      limit: 20,
    });
    setResult(data);
  };

  useEffect(() => {
    fetchSearchResults();
  }, [filter]);

  return (
    <div className="my-4">
      <h2 className="text-5xl pb-3 font-extrabold ">{query}</h2>
      <FilterGif alignLeft={true} />
      {result.length > 0 ? (
        <div className="columns-2 md:columns-3 lg:columns-4 gap-2">
          {result.map((gif) => (
            <Gif gif={gif} key={gif.id} />
          ))}
        </div>
      ) : (
        <span>
          {" "}
          NO GIFs found for {query}.Try searching for sticker instead?
        </span>
      )}
    </div>
  );
};

export default Search;
