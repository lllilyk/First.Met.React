import React from "react"; 

const movies = [
    {
        id: 1,
        name: "AfterSun",
    },
    {
        id: 2,
        name: "SLAMDUNK",
    },
    {
        id: 3,
        name: "SPIDER-MAN : ACROSS THE SPIDER-VERSE",
    },
    {
        id: 4,
        name: "Monster",
    },
];

function BestMovieList(props) {
    return (
        <ul>
            {movies.map((movie) => {
                //return <li key={movie.id}>{movie.name}</li>;
                return <li key={`No-${movie.id}-Movie-of-2023`}>{movie.name}</li>
            })}
        </ul>
    );
}

export default BestMovieList;