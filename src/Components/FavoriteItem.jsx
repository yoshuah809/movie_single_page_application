import React, { useContext } from "react";
import { Paper, Button, Grid, Icon } from "@material-ui/core/";
import Rating from "@material-ui/lab/Rating";
import { FavoriteContext } from "./Context/FavoriteContext";

const FavoriteItem = ({ movie }) => {
	const { handleRemoveFavorite } = useContext(FavoriteContext);

	return (
		<>
			<Grid container item xs={12} sm={12} lg={12}>
				<Paper style={{ padding: 5, textAlign: "center", width: "100%" }}>
					<table style={{ width: "100%" }}>
						<tr>
							<td>
								<img width={60} src={movie.portrait} alt="movie portrait" />
							</td>
							<td>
								<h2> {movie.title}</h2>
								<Rating value={movie.rating} readOnly></Rating>
							</td>
							<td> {`Year: ${movie.year}`} </td>
							<td> {`Price: $${movie.price}`}</td>
							<td>
								<Button
									variant="contained"
									color="secondary"
									onClick={() => handleRemoveFavorite(movie)}
								>
									Remove
								</Button>
							</td>
						</tr>
					</table>
				</Paper>
			</Grid>
		</>
	);
};

export default FavoriteItem;
