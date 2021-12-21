import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import { getMovies } from "./Services/MovieServices";
import Grid from "@material-ui/core/Grid";

const Movies = () => {
	const [movies, SetMovies] = useState([]);

	useEffect(() => {
		LoadMovies();
	}, []);

	useEffect(() => {
		console.log("Se ejecuta all trhe time");
	}, []);

	const LoadMovies = async () => {
		const { data: movies } = await getMovies();
		SetMovies(movies);
	};

	return (
		<div>
			<h2>Movies</h2>
			<Grid container spacing={2}>
				{movies.map((movie) => (
					<Movie data={movie} key={movie.movieId} />
				))}
			</Grid>
		</div>
	);
};

export default Movies;
