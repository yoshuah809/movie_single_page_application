import React, { useContext } from "react";
import { Paper, Button, Grid, Icon } from "@material-ui/core/";
import { FavoriteContext } from "./Context/FavoriteContext";
import FavoriteItem from "./FavoriteItem";

const Favorites = () => {
	const { favItems } = useContext(FavoriteContext);
	return (
		<>
			<h2> My Favorites {favItems === 0 && "(You have no favorite movies)"}</h2>
			<Grid container spacing={2}>
				{favItems.map((movie) => (
					<FavoriteItem movie={movie} />
				))}
			</Grid>
		</>
	);
};

export default Favorites;
