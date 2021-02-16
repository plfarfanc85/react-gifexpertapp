// Esta funcion no regresa directamente los gifs, regresa una promesa que resuelve la colección de las imagenes
export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=fXJl8NyS20N9vkX80Z4yy43VovN4yqjo&q=${encodeURI(
    category
  )}&limit=3`;
  const resp = await fetch(url);
  const { data } = await resp.json(resp);

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  console.log("entra");

  return gifs;
};
