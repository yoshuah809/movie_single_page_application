import React from "react";
import Movie from "./Movie";

const Movies = () => {
	const movies = [
		{
			title: "Terminator",
			genre: "Accion",
			director: "James Cameron",
			year: 2000,
		},
		{
			title: "Ratatuille",
			genre: "Adventure",
			director: "Will Smith",
			year: 2011,
		},
		{
			title: "Avenger",
			genre: "Accion",
			director: "John Wayne",
			year: 2015,
		},
	];
	return (
		<div>
			<h2>Movies</h2>
			<div>Movies Details</div>

			{movies.map((movie) => (
				<Movie data={movie} />
			))}
		</div>
	);
};

export default Movies;
