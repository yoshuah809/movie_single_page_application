import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Menu = () => {
	return (
		<nav>
			<div>Menu</div>
			<br />
			<Link to="/search">Search</Link>
			<br />
			<Link to="/toprated">Top Rated</Link>
			<br />
			<Link to="/movies">All</Link>
		</nav>
	);
};

export default Menu;
