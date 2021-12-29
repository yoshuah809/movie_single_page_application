import React from "react";
import ReactDOM from "react-dom";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Menu from "./Components/Menu";
import Header from "./Components/Header";
import Register from "./Components/Register";

import { BrowserRouter } from "react-router-dom";
import "./styles.css";
import { FavoriteProvider } from "./Components/Context/FavoriteContext";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<FavoriteProvider>
				<Header />
				<Menu />
				<Body />
				<Footer />
			</FavoriteProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
