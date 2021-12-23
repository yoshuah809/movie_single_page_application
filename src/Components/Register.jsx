import React, { useState } from "react";
import { Container, Icon, TextField, Button } from "@material-ui/core";
import { register } from "./Services/UserServices";

const Register = () => {
	const [user, setUSer] = useState({
		name: "",
		lastname: "",
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		setUSer({ ...user, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await register(user);
	};

	return (
		<Container>
			<form onSubmit={handleSubmit}>
				<h2 style={{ color: "grey" }}>Movie Sales</h2>
				<h2>Registrer Now</h2>
				<Icon color="action">account_circle</Icon>
				&nbsp;
				<TextField
					name="name"
					required
					placeholder="Type your Name"
					style={{ width: 300 }}
					onChange={(e) => handleChange(e)}
				></TextField>
				&nbsp;
				<TextField
					onChange={(e) => handleChange(e)}
					name="lastname"
					required
					placeholder="Type your Lastname"
					style={{ width: 300 }}
				></TextField>
				<br />
				<br />
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
				<hr />
				<Button variant="contained" color="default">
					Go Back
				</Button>
				&nbsp; &nbsp;
				<Button variant="contained" color="secondary" type="submit">
					Register
				</Button>
			</form>
		</Container>
	);
};

export default Register;
