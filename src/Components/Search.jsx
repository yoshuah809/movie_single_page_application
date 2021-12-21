import React, { useState, useEffect } from "react";
import { searchBy } from "./Services/MovieServices";
import Grid from "@material-ui/core/Grid";
import Movie from "./Movie";

const Search = (props) => {
	const [movies, setMovies] = useState([]);

	const handleSearch = async (value) => {
		const { data: movies } = await searchBy(value);
		setMovies(movies);
	};

	useEffect(() => {
		handleSearch(props.match.params.value);
	}, [props.match.params.value]);
	return (
		<>
			<h2>Results</h2>
			<Grid container spacing={2}>
				{movies.map((movie) => (
					<Movie data={movie} key={movie.movieId} />
				))}
			</Grid>
		</>
	);
};

export default Search;
