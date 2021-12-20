import React from "react";
import ReactDOM from "react-dom";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Menu from "./Components/Menu";
import Navbar from "./Components/Navbar";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Navbar />
			<Menu />
			<Body />

			<Footer />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
