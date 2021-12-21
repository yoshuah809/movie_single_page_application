import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";

const Menu = () => {
	return (
		<nav>
			<TextField
				name="search"
				placeholder="Search by Genre, Title, Actor"
				style={{ width: 300 }}
			/>
			<Icon color="action" style={{ cursor: "pointer" }}>
				close
			</Icon>
			<Button variant="contained">
				<Icon color="action">search</Icon>
				Search
			</Button>
			&nbsp;
			<Button variant="contained">
				<Icon color="action">star</Icon>
				Top Rated
			</Button>
			&nbsp;
			<Button variant="contained">
				<Icon color="action">apps</Icon>
				All Movies
			</Button>
		</nav>
	);
};

export default Menu;
