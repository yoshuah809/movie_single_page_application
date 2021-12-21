import React, { useState, useEffect } from "react";
import { getTopRated } from "./Services/MovieServices";
import Movie from "./Movie";
import Grid from "@material-ui/core/Grid";

const TopRated = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		LoadMovies();
	}, []);

	const LoadMovies = async (params) => {
		const { data: topRated } = await getTopRated(5);
		setMovies(topRated);
	};

	return (
		<>
			<h2>Top Rated Movies</h2>
			<Grid container spacing={2}>
				{movies.map((movie) => (
					<Movie data={movie} key={movie.movieId} />
				))}
			</Grid>
		</>
	);
};

export default TopRated;
