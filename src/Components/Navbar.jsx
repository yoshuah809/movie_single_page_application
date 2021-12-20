import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<>
			<div>Navbar</div>
			<br />
			<Link to="/favorites">Favorites</Link>
			<br />
			<Link to="/cart">Cart</Link>
		</>
	);
};

export default NavBar;
