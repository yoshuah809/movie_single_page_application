import React, { useEffect, createContext, useState } from "react";
import { getFavorites, addFavorite } from "../Services/FavoriteServices";

export const FavoriteContext = createContext();

export const FavoriteProvider = (props) => {
	const [favoriteQty, setFavoriteQty] = useState(0);

	const handleGetFavorite = async () => {
		const { data: favorites } = await getFavorites();
		setFavoriteQty(favorites.length);
	};

	const handleAddFavorite = async (movie) => {
		//console.log(movie.movieId);
		await addFavorite({
			UserID: 1001,
			MovieId: movie.movieId,
		});

		setFavoriteQty(favoriteQty + 1);
	};

	useEffect(() => {
		handleGetFavorite();
	}, []);

	return (
		<FavoriteContext.Provider value={{ favoriteQty, handleAddFavorite }}>
			{props.children}
		</FavoriteContext.Provider>
	);
};
