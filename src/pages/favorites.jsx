import React, { useEffect, useReducer, useState } from "react";
import { GifState } from "../context/gif-context";
import Gif from "../components/gif";

const Favorites = () => {
  const [favoriteGIFs, setFavoriteGIFs] = useState([]);
  const { gf, favorites } = GifState();

  const fectFavoritesGIFs = async () => {
    const { data: gifs } = await gf.gifs(favorites);
    setFavoriteGIFs(gifs);
  };

  useEffect(() => {
    fectFavoritesGIFs();
  }, []);

  return (
    <div className="mt-2 ">
      <span className="faded-text">My Favorites</span>
      <div className="columns-2 md:col-span-3 gap-2 mt-2">
        {favoriteGIFs.map((gifs) => {
          return <Gif gif={gifs} key={gifs.id} />;
        })}
      </div>
    </div>
  );
};

export default Favorites;
