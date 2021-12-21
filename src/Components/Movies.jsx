import React, { useState } from "react";
import Movie from "./Movie";

const Movies = () => {
	const [movies, SetMovies] = useState([]);
	// const movies = [

	// 	{
	// 		title: "Terminator",
	// 		genre: "Accion",
	// 		director: "James Cameron",
	// 		year: 2000,
	// 	},
	// 	{
	// 		title: "Ratatuille",
	// 		genre: "Adventure",
	// 		director: "Will Smith",
	// 		year: 2011,
	// 	},
	// 	{
	// 		title: "Avenger",
	// 		genre: "Accion",
	// 		director: "John Wayne",
	// 		year: 2015,
	// 	},
	// ];

	const LoadMovies = () => {
		fetch("http://localhost:5000/api/Movie")
			.then((response) => response.json())
			.then((data) => SetMovies(data));
	};

	return (
		<div>
			<h2>Movies</h2>
			<button onClick={() => LoadMovies()}>Load Movies</button>

			{movies.map((movie) => (
				<Movie data={movie} />
			))}
		</div>
	);
};

export default Movies;
