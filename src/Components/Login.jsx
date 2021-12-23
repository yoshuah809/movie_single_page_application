import React, { useState } from "react";
import { Container, Icon, TextField, Button } from "@material-ui/core";
import { login } from "./Services/UserServices";
import { useHistory } from "react-router-dom";

function Login() {
	const [user, setUSer] = useState({
		email: "",
		password: "",
	});

	const [msg, setMsg] = useState("");
	const handleChange = (e) => {
		setUSer({ ...user, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { data: token } = await login(user);
		if (token !== "") {
			history.push({ pathname: "/toprated" });
		} else {
			setMsg("Wrong credentials, please try again!");
		}
	};

	const history = useHistory();

	return (
		<Container>
			<form onSubmit={handleSubmit}>
				<h2 style={{ color: "grey" }}>Movie Sales</h2>
				<h2>Welcome</h2>
				<Icon color="action">mail_outline</Icon>
				&nbsp;
				<TextField
					onChange={(e) => handleChange(e)}
					name="email"
					required
					type="email"
					placeholder="Type your Email"
					style={{ width: 300 }}
				></TextField>
				<br />
				<br />
				<Icon color="action">vpn_key</Icon>
				&nbsp;
				<TextField
					onChange={(e) => handleChange(e)}
					name="password"
					required
					type="password"
					placeholder="Type your Password"
					style={{ width: 300 }}
				></TextField>
				<br />
				<br />
				<h4 style={{ color: "red" }}>{msg}</h4>
				<hr />
				<Button variant="contained" color="primary" type="submit">
					Login
				</Button>
				&nbsp; &nbsp;
				<Button
					variant="contained"
					color="secondary"
					type="submit"
					onClick={() => history.push({ pathname: "/register" })}
				>
					Register
				</Button>
			</form>
		</Container>
	);
}

export default Login;
