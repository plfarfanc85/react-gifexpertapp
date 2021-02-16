//import React, { useEffect, useState } from "react";
import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
//import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  // Que se ejecute getGifs() solo cuando el componente es rederisado por primera vez
  //const [images, setImages] = useState([]);
  const { data: images, loading } = useFetchGifs(category);

  /*
  useEffect(() => {
    getGifs(category).then(setImages);
  }, [category]);
  */

  /*
   const getGifs = async () => {
     const url = `https://api.giphy.com/v1/gifs/search?api_key=fXJl8NyS20N9vkX80Z4yy43VovN4yqjo&q=${encodeURI(
       category
     )}&limit=10`;
     const resp = await fetch(url);
     const { data } = await resp.json(resp);

     const gifs = data.map((img) => {
       return {
         id: img.id,
         title: img.title,
         url: img.images?.downsized_medium.url,
       };
     });

     console.log(gifs);
     setImages(gifs);
   };
   */

  return (
    <>
      <h3>{category}</h3>
      {/* {loading ? "Cargando ....." : "Data cargada"} */}
      {loading && <p>Loading</p>}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
