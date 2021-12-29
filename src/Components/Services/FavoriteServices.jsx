import axios from "./AxiosServices";

export function getFavorites() {
	return axios.get("Favorites/");
}

export function addFavorite(favorite) {
	return axios.post("Favorites/Add/", favorite);
}

export function deleteFavorites(favorite) {
	return axios.post("Favorites/Delete/", favorite);
}
