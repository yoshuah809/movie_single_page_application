import React from "react";
import "./Footer.css";
import Icon from "@material-ui/core/Icon";

const Footer = () => {
	return (
		<footer>
			<p>Movie Sales - CopyRight</p>
			<Icon color="primary" fontSize="large">
				email
			</Icon>
			&nbsp;&nbsp;
			<Icon color="primary" fontSize="large">
				facebook
			</Icon>
		</footer>
	);
};

export default Footer;
