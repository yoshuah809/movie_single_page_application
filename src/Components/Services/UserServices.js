import axios from "./AxiosServices";

export function register(user) {
	return axios.post("User/", user);
}

export function login(user) {
	return axios.post("Login/", user);
}
