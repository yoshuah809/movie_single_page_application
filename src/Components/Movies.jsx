import React, { useState } from "react";
import Movie from "./Movie";
import { getMovies } from "./Services/MovieServices";
import Grid from "@material-ui/core/Grid";

const Movies = () => {
	const [movies, SetMovies] = useState([]);

	const LoadMovies = async () => {
		const { data: movies } = await getMovies();
		SetMovies(movies);
		console.log(movies);
	};

	return (
		<div>
			<h2>Movies</h2>
			<button onClick={() => LoadMovies()}>Load Movies</button>
			<Grid container spacing={2}>
				{movies.map((movie) => (
					<Movie data={movie} key={movie.movieId} />
				))}
			</Grid>
		</div>
	);
};

export default Movies;
