import axios from "./AxiosServices";

export function getMovies() {
	return axios.get("Movie/");
}
