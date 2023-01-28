import React from "react";

// GifList component displays a list of gifs
function GifList({ giphy,search }) {
  return (
    <>
    <ul>
      {giphy
      .filter(giph => search === "" || giph.title.toLowerCase().includes(search.toLowerCase()))
      
      .map((giph) => {
        const { id, title, images } = giph;
        return (
            <>
            <div className=" row d-flex flex-row">
            <div className="col">
            <li key={id}>
            <img src={images.original.url} alt={title} title={title} />
            </li>
            </div>
            </div>
           </>
        );
      })}
      </ul>
    </>
  );
}

export default GifList;