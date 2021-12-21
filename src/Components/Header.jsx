import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Icon from "@material-ui/core/Icon";
import Badge from "@material-ui/core/Badge";

const Navbar = () => {
	return (
		<header>
			<h1>Movies</h1>
			<br />
			<Link to="/favorites">
				<Icon color="action" fontSize="large">
					favorite
				</Icon>
			</Link>
			<Badge badgeContent={1} color="secondary"></Badge>
			<br />
			<Link to="/cart">
				<Icon color="action" fontSize="large">
					shopping_cart
				</Icon>
			</Link>
			<Badge badgeContent={0} color="secondary"></Badge>
		</header>
	);
};

export default Navbar;
