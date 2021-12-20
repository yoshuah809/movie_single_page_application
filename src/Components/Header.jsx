import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Navbar = () => {
	return (
		<header>
			<h1>Movies</h1>
			<br />
			<Link to="/favorites">Favorites</Link>
			<br />
			<Link to="/cart">Cart</Link>
		</header>
	);
};

export default Navbar;
