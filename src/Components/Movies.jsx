import React, { useState } from "react";
import Movie from "./Movie";
import { getMovies } from "./Services/MovieServices";

const Movies = () => {
	const [movies, SetMovies] = useState([]);

	const LoadMovies = async () => {
		const { data: movies } = await getMovies();
		SetMovies(movies);
	};

	return (
		<div>
			<h2>Movies</h2>
			<button onClick={() => LoadMovies()}>Load Movies</button>

			{movies.map((movie) => (
				<Movie data={movie} key={movie.MovieId} />
			))}
		</div>
	);
};

export default Movies;
