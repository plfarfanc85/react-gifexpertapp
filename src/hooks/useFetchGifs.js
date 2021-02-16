import { useState } from "react";
import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

// los custome hooks funcionana como si fueran functional components
// ayuda que los componentes no esten tan cargados
export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  // ejemplo del boton en el componente
  useEffect(() => {
    getGifs(category).then((imgs) => {
      setState({
        data: imgs,
        loading: false,
      });
    });
  }, [category]);

  return state;
};
