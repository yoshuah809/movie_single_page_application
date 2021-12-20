import React, { useState, useRef } from "react";

const Movie = ({ data }) => {
	const [buttons, setButtons] = useState("");
	const favorite = useRef();

	const setFavorites = () => {
		favorite.current.style.backgroundColor = "pink";
	};
	return (
		<>
			<div>
				<button
					onClick={() => {
						setFavorites();
					}}
					ref={favorite}
					style={{ backgroundColor: "yellow" }}
				>
					Favorites
				</button>
			</div>
			<div>{data.title}</div>
			<div>{data.genre}</div>
			<div>{data.director}</div>
			<div>{data.year}</div>
			<hr />
			<div>
				<button
					disabled={buttons}
					onClick={() => {
						setButtons("disabled");
						alert("You have bought this movie");
					}}
				>
					Buy
				</button>
				<button
					disabled={buttons}
					onClick={() => {
						setButtons("disabled");
						alert("You have added this movie to the shopping cart");
					}}
				>
					Add to Cart
				</button>
			</div>
		</>
	);
};

export default Movie;
