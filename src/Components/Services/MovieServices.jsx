import axios from "./AxiosServices";

export function getMovies() {
	return axios.get("Movie/");
}

export function searchBy(value) {
	return axios.get("Movie/SearchBy/" + value);
}
