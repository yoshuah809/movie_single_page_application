import React from "react";

const Movie = (props) => {
	return (
		<div>
			<h2>Movies</h2>
			<div>Movies Details</div>

			<>
				<div>{props.data.title}</div>
				<div>{props.data.genra}</div>
				<div>{props.data.director}</div>
				<div>{props.data.year}</div>
				<hr />
			</>
		</div>
	);
};

export default Movie;
