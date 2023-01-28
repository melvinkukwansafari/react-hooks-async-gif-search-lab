import React, { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
    const [giphy, setGiphy] = useState([]);
    const [currentPage] = useState(1);
    const [itemsPerPage] = useState(3);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch(`lM4YJ29z6pAEtnY0R1V8Mo1iSGfcy9HQ`)
            .then((r) => r.json())
            .then((data) => setGiphy(data.data))
            .catch((err) => console.log(err));
    }, []);

    const indexOfLastGif = currentPage * itemsPerPage;
    const indexOfFirstGif = indexOfLastGif - itemsPerPage;
    const currentGifs = giphy.slice(indexOfFirstGif, indexOfLastGif);

    console.log(currentGifs);

    return (
        <>
            <div className="row" >

                
                {currentGifs

                .map((gif) => (
                    <>
                    
                    <div className="col">
                    <img  key={gif.id} src={gif.images.original.url} alt={gif.title} />
                    
                    
                    <h1 >I have Learnt Pagination</h1>
                    </div>
                    
                    
                    </>
                ))}
                
            </div>
            <GifSearch search={search} setSearch={setSearch}/>
            <GifList giphy={giphy} search={search}/>
          
        </>
    );
}

export default GifListContainer;