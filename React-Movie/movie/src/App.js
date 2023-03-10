import React, { useState, useEffect } from "react"; 
import MovieCard from "./MovieCard"; 
import "./App.css"
 
 
const API_URL = "http://www.omdbapi.com?apikey=b6003d8a"; 
 
const App = () => { 
    const [searchTerm, setSearchTerm] = useState(""); 
    const [movies, setMovies] = useState([]); 
 
    useEffect(() => { 
        searchMovies("Plane"); 
    }, []); 
 
 
    const searchMovies = async (title) => { 
        const response = await fetch(`${API_URL}&s=${title}`); 
        const data = await response.json(); 
 
        setMovies(data.Search); 
    } 
 
    return ( 
        <div className="movie">
            <div className="top">
            <h1>MovieLand</h1> 
            <div> 
                <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search for movies" /> 
                <button onClick={() => searchMovies(searchTerm)}>Search</button> 
            </div> 
            </div> 
 
            {movies?.length > 0 ? ( 
                <div className="moviesapp"> 
                    {movies.map((movie) => (<MovieCard movie={movie} />))} 
                </div>) : 
                (<div className="found"> 
                    <h2>Movie Not Found</h2> 
                </div> 
                ) 
 
            } 
        </div> 
    ); 
}; 
 
export default App;


// import React, { useState, useEffect } from "react"; 
// import MovieCard from "./MovieCard"; 
 
 
// const API_URL = "http://www.omdbapi.com?apikey=b6003d8a"; 
 
// const App = () => { 
//     const [searchItem, setSearchItem] = useState(""); 
//     const [movies, setMovies] = useState([]); 
 
//     useEffect(() => { 
//         searchMovies("batman"); 
//     }, []); 
 
//     const searchMovies = async (title) => { 
 
//         //----------------------------------------------------------------------------------------- 
//         //Found the error....the space before and after &s= was too much 
//         const response = await fetch(`${API_URL}&s=${title}`); 
//         //----------------------------------------------------------------------------------------- 
 
 
//         const data = await response.json(); 
 
//         setMovies(data.Search); 
//     }; 
 
//     return ( 
//         <div> 
//             <h1>MovieLand</h1> 
//             <div> 
//                 <input 
//                     value={searchItem} 
//                     onChange={(e) => setSearchItem(e.target.value)} 
//                     placeholder="Search for movies" 
//                 /> 
//                 <button onClick={() => searchMovies(searchItem)}>Search</button> 
//             </div> 
 
//             {movies?.length > 0 ? ( 
//                 <div className="container"> 
//                     {movies.map((movie) => (<MovieCard movie={movie} /> 
//                     ))} 
//                 </div> 
//             ) : ( 
//                 <div className="empty"> 
//                     <h2>Movie Not Found</h2> 
//                 </div> 
//             )} 
//         </div> 
//     ); 
// }; 
 
// export default App;