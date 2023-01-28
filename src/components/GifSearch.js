import React, {useState} from "react";

function GifSearch ({search,setSearch}) {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const handleSearch = (event) => {
        setSearchValue(event.target.value);
        setSearch(event.target.value)
        

        }

        const handleClick = (event) => {
            event.preventDefault();
            fetch(`lM4YJ29z6pAEtnY0R1V8Mo1iSGfcy9HQ${searchValue}&limit=10`)
            .then(response => response.json())
            .then(data => {
               
                setSearchResults(data.data);
            })
            .catch(error => console.log(error));
        }
        


    return (
        <>  
        <form> 
      <input type="text" 
          placeholder="Search"
          value={searchValue}
          onChange ={handleSearch}
          className= 'mb-3 mx-2'
          />
          <button onClick={handleClick} type="submit" className="btn btn-outline-success">Search</button>
          {searchResults.map(result => (
               <li key={result.id}>
               <h4>{result.title}</h4>
               <img src={result.images.fixed_height.url} alt={result.title} />
           </li>
            ))}
          </form>
        
      </>

    )
}

export default GifSearch;