import React, { useState, useRef, useContext } from "react";
import { FavoriteContext } from "./Context/FavoriteContext";
import { Paper, Button, Grid, Icon } from "@material-ui/core/";
import Rating from "@material-ui/lab/Rating";

const Movie = ({ data }) => {
	const [buttons, setButtons] = useState("");
	const [isFavorite, setIsFavorite] = useState(
		data.favorite.length ? true : false
	);
	const favorite = useRef();
	const { handleAddFavorite, handleRemoveFavorite } =
		useContext(FavoriteContext);

	const setFavorites = (movie) => {
		//console.log(movie);
		if (!isFavorite) {
			handleAddFavorite(movie);
			favorite.current.className =
				"material-icons MuiIcon-root MuiIcon-colorSecondary";
		} else {
			handleRemoveFavorite(movie);
			favorite.current.className =
				"material-icons MuiIcon-root MuiIcon-colorDisabled";
		}
		setIsFavorite(!isFavorite);
	};
	return (
		<>
			<Grid container item xs={12} sm={4} lg={3}>
				<Paper style={{ padding: 5, textAlign: "center" }}>
					<h2>{data.title}</h2>
					<Icon
						color={data.favorite.length > 0 ? "secondary" : "disabled"}
						style={{ cursor: "pointer" }}
						ref={favorite}
						onClick={() => setFavorites(data)}
					>
						favorite
					</Icon>
					<div>
						<img width={200} src={data.portrait} alt="Movie Portrait" />
					</div>
					<div>
						<Rating value={data.rating} readOnly />
					</div>
					<div>{data.sinopsis}</div>
					<br />
					<div>{`Genre: ${data.genre}`}</div>
					<div>{`Director: ${data.director}`}</div>
					<div>{`Year: ${data.year}`}</div>
					<div>
						<b>{`Price: $${data.price}`}</b>
					</div>
					<hr />
					<div>
						<Button
							variant="contained"
							color="primary"
							disabled={buttons}
							onClick={() => {
								setButtons("disabled");
								alert("You have bought this movie");
							}}
						>
							Buy
						</Button>
						&nbsp;&nbsp;
						<Button
							variant="outlined"
							color="secondary"
							disabled={buttons}
							onClick={() => {
								setButtons("disabled");
								alert("You have added this movie to the shopping cart");
							}}
						>
							Add to Cart
						</Button>
					</div>
				</Paper>
			</Grid>
		</>
	);
};

export default Movie;
