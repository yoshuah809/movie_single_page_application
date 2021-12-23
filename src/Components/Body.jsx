import React from "react";
import Movies from "./Movies";
import { Route } from "react-router-dom";
import Cart from "./Cart";
import Favorites from "./Favorites";
import Search from "./Search";
import TopRated from "./TopRated";
import Register from "./Register";
import Login from "./Login";

const Body = () => {
	return (
		<section>
			<Route path="/" exact component={Login} />
			<Route path="/movies" exact component={Movies} />
			<Route path="/favorites" exact component={Favorites} />
			<Route path="/cart" exact component={Cart} />
			<Route path="/search/:value" exact component={Search} />
			<Route path="/toprated" exact component={TopRated} />
			<Route path="/search/" exact component={Movies} />
			<Route path="/register/" exact component={Register} />
			{/* <Route path="/login/" exact component={Login} /> */}
		</section>
	);
};

export default Body;
