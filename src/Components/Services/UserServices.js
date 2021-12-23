import axios from "./AxiosServices";

export function register(user) {
	return axios.post("User/", user);
}
