import React, { useEffect, createContext, useState } from "react";
import {
	getFavorites,
	addFavorite,
	deleteFavorites,
} from "../Services/FavoriteServices";

export const FavoriteContext = createContext();

export const FavoriteProvider = (props) => {
	const [favoriteQty, setFavoriteQty] = useState(0);
	const [favItems, setFavItems] = useState([]);

	const handleGetFavorite = async () => {
		const { data: favorites } = await getFavorites();
		setFavoriteQty(favorites.length);
		setFavItems(favorites);
	};

	const handleAddFavorite = async (movie) => {
		//console.log(movie.movieId);
		await addFavorite({
			UserID: 1001,
			MovieId: movie.movieId,
		});

		setFavoriteQty(favoriteQty + 1);
		setFavItems([...favItems, movie]);
	};

	const handleRemoveFavorite = async (movie) => {
		const { data } = await deleteFavorites({
			UserID: 1001,
			MovieId: movie.movieId,
		});

		const newItem = favItems.filter((item) => item.movieId !== movie.movieId);
		setFavItems(newItem);
		setFavoriteQty(favoriteQty - 1);
	};

	useEffect(() => {
		handleGetFavorite();
	}, []);

	return (
		<FavoriteContext.Provider
			value={{ favItems, favoriteQty, handleAddFavorite, handleRemoveFavorite }}
		>
			{props.children}
		</FavoriteContext.Provider>
	);
};
